import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import AddCommentForm from './components/AddCommentForm';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import { makeStyles,
         Grid,
         Paper,
         Box, 
         Typography,
         Button,
         Hidden} from '@material-ui/core';


const useStyles = makeStyles((theme) => (
  {
    gridItem: {
      padding: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(1),
    },
    dividerHl: {
      border: '0.7px solid #aeaeae',
      width: '85%',
      margin: '10% auto',
    },
    dividerVl: {
      border: '0.7px solid #aeaeae',
      margin: '5%',
      height: '70vh',
    },
    comment: {
      margin: theme.spacing(2),
    },
    commentsBox: {
      maxHeight: '700px',
      overflow: 'auto',
    },
    listenBtn: {
      marginTop: theme.spacing(2),
    },
  }
));

function readAudioFile({ target }) {
  const text = target.parentNode.previousSibling.innerText; 
  Axios.post('http://localhost:3001/translate', { text: text} ); 
}

function App() {
  const[ getResponse, setResponse ] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    Axios.get('http://localhost:3001/api/comments').then((result) => {
      setResponse(result.data);
    });
  }, []);
  
  return (
        <Grid container xs={12} sm={12} spacing={1}>

          <Grid item xs={12} sm={5} md={5} className={classes.gridItem}>
            <Paper className={classes.paper}>
              <AddCommentForm />
            </Paper>
          </Grid>
          
          <Hidden smUp>
            <div className={classes.dividerHl} fullWidth/>
          </Hidden>

          <Hidden xsDown>
            <div className={classes.dividerVl}/>
          </Hidden>

          <Grid item xs={12} sm={5} md={5} className={classes.gridItem}>
            <Paper className={classes.paper}>
              <Box>

                <Typography variant="h6">
                  Comentários:
                </Typography>

                <Box className={classes.commentsBox}>
                  {getResponse.length > 0 ? getResponse.map( (comment, index) => (
                  <Box key={index} className={classes.comment}>
                    <Typography variant="body2">
                      {comment.comments}
                    </Typography>
                    <Button className={classes.listenBtn} size="small" variant="outlined" endIcon={<AudiotrackIcon />} onClick={ readAudioFile }>
                      Ouvir
                    </Button>
                  </Box>
                  )) : null}
                </Box>

              </Box>
            </Paper>
          </Grid>
        </Grid>
  );
}

export default App;
