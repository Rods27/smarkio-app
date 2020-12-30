import React from 'react';
import { makeStyles,
         createMuiTheme,
         ThemeProvider,
         Grid,
         Paper,
         Box, 
         Typography,
         Button,
         Hidden} from '@material-ui/core';

import AddCommentForm from './components/AddCommentForm';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e0e0e0',
      light: '#ffffff',
      dark: '#aeaeae',
      contrastText: '#000000',
    },
    secondary: {
      main: '#546e7a',
      light: '#819ca9',
      dark: '#29434e',
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontSize: 14,
  },
});

const useStyles = makeStyles((theme) => (
  {
    root: {
      backgroundColor: '#e0e0e0',
      height: '100vh',
      padding: theme.spacing(4),
    },
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
    },
    comment: {
      margin: theme.spacing(2),
    },
    listenBtn: {
      marginTop: theme.spacing(2),
    },
  }
));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
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
                <Box>
                  <Box className={classes.comment}>

                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras posuere ante eget vestibulum congue.
                      Nullam sagittis mi nec velit lobortis luctus.
                      Nullam a ex ullamcorper neque consectetur ultricies sed in leo.
                    </Typography>

                    <Button className={classes.listenBtn} size="small" variant="outlined">
                      Ouvir
                    </Button>

                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
