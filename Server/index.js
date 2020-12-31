const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// Criando a conexão
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
})

const app = express();
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// Connect to MySQL
db.connect( err => {
  if(err) {
    throw err;
  }
  console.log('MySQL connected !');
})

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
  })
});

// Get data
app.get('/api/comments', (req, resp) => {
  const sqlSelect = 'SELECT * FROM smarkioDB.comments';
  db.query(sqlSelect, (err, result) => {
    if(err) {
      throw err;
    }
    resp.send(result);
    console.log('Dados selecionados com sucesso !');
  })
})

app.listen('3001', () => {
  console.log('Ouvindo a porta 3001...');
});