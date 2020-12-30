import React from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => (
  {
    button: {
      marginTop: theme.spacing(1),
    },
  }
));

export default function AddCommentForm() {

  const classes = useStyles();

  return (
    <form>
      <TextField
      color="secondary"
      label="Comentário"
      rowsMax={10} size="medium"
      variant="outlined" 
      fullWidth multiline />

      <Button
      className={classes.button}
      color="secondary"
      variant="outlined"
      fullWidth>
        Cadastrar
      </Button>
    </form>
  )
}