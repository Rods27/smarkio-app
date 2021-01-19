import React, { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import MyContext from '../context/MyContext';
import Axios from 'axios';
import SendIcon from '@material-ui/icons/Send';


export default function AddCommentForm() {
  const { getComment, setComment } = useContext(MyContext);
  const [isInvalid, setInvalid] = useState(true);

  function handleComments({ target: { value } }) {
    setInvalid(false);
    setComment(value);
  }

  function handleClick() {
    if(getComment.length > 0 ) {
      Axios.post('http://localhost:3001/api/insert', { comments: getComment });
      window.location.reload();
    }
    return setInvalid(true);
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
      color="secondary"
      variant="outlined"
      endIcon={<SendIcon />}
      fullWidth
      onClick={ handleClick }
      disabled={isInvalid}
      >
        Cadastrar
      </Button>
    </form>
  );
}