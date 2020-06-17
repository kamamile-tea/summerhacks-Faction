import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {Grid} from "@material-ui/core";

// Pages
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";

//Style
import './App.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

const classes = useStyles();

class App extends React.Component {

  render() {
    return (

      <>
      <Grid container direction="column">
        <Grid item>
          <h1>This will be the header bar, where we click links to render other
            componnts</h1>
            <ul>
              <li>
                <Link to="/">LoginRegister</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>

        </Grid>
        <Grid item container>
          <Grid item container xs={6} className="panels leftPanel">
            <img src={require('./images/collaboration.jpg')} className = "leftPanelImg"/>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
            <div className={classes.root}>
              <Typography variant='h5' gutterbottom className = "missionTitle">JOIN A COLLABORATIVE COMMUNIT
              Y OF PROBLEM SOLVERS</Typography>
            </div>
            </Grid>
            <Grid item xs={2}></Grid>

          </Grid>

          <Grid item xs={6} className = "panels">

          <Switch>
            <Route exact path="/" component={LoginRegister} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>

          </Grid>
        </Grid>
      </Grid>



      </>
    );
  }
}

export default App;

/*

handles which pages to show based on URL

*/
