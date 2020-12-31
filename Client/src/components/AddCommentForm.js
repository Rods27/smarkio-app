import React, {useContext} from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import MyContext from '../context/MyContext';
import Axios from 'axios';

const useStyles = makeStyles((theme) => (
  {
    button: {
      marginTop: theme.spacing(1),
    },
  }
));

export default function AddCommentForm() {
  const { getComment, setComment } = useContext(MyContext);
  const classes = useStyles();

  function handleComments({ target: { value } }) {
    setComment(value);
  }

  function handleClick() {
    Axios.post('http://localhost:3001/api/insert', { comments: getComment });
    alert('Comentário inserido com sucesso !');
  }

  return (
    <form>
      <TextField
      color="secondary"
      label="Comentário"
      rowsMax={10} size="medium"
      variant="outlined" 
      fullWidth multiline
      onChange={ handleComments }
      />

      <Button
      className={classes.button}
      color="secondary"
      variant="outlined"
      fullWidth
      onClick={ handleClick }>
        Cadastrar
      </Button>
    </form>
  )
}