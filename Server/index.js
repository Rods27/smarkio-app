const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const Sound = require('node-aplay');

// Criando a conexão
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Connect to MySQL
db.connect( err => {
  if(err) {
    throw err;
  }
  console.log('MySQL connected !');
});

// Creating database
app.get('/', (req, resp) => {
  let messageSuccess = 'Ready to go !'
  resp.send(messageSuccess);
});

// Insert data
app.post('/api/insert', (req, resp) => {
  const getComments = req.body.comments;
  const sqlInsert = 'INSERT INTO smarkioDB.comments (comments) VALUES (?)';
  db.query(sqlInsert, [getComments], (err, result) => {
    if(err) {
      throw err;
    }
    console.log('Dado inserido com sucesso !');
  });
});

// Get data
app.get('/api/comments', (req, resp) => {
  const sqlSelect = 'SELECT * FROM smarkioDB.comments';
  db.query(sqlSelect, (err, result) => {
    if(err) {
      throw err;
    }
    resp.send(result);
    console.log('Dados recuperados com sucesso !');
  });
});

app.listen('3001', () => {
  console.log('Ouvindo a porta 3001...');
});

// Watson
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: '1xZ-T05ruBgOHJHNGUfPcxcSaEAy0fhgENSmEdzlV7i6',
  }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/95590e77-6b5a-49a5-bcaa-6d958d3dd016',
  disableSslVerification: true,
});

app.post('/translate', (req, resp) => {

  const synthesizeParams = {
    text: req.body.text,
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaV3Voice',
  }
  
  textToSpeech.synthesize(synthesizeParams)
    .then(response => {
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      fs.writeFileSync(`../Client/public/sounds/${req.body.text}.wav`, buffer);
      new Sound(`../Client/public/sounds/${req.body.text}.wav`).play();
    })
    .catch(err => {
      console.log('error:', err);
    });
});
