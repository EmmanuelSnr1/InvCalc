import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import background from '../assets/background.jpg'; // replace with your actual image path

const useStyles = makeStyles((theme) => ({
  hero: {
    height: '50vh', // Change this if you want to change the height of the hero component
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
}));

function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <Typography align="center"><h1>Welcome to the Inv Calculator</h1></Typography>
    </div>
  );
}

export default Hero;
