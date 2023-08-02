import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  spacer: props => ({
    height: props.size, 
    width: '100%',
  }),
});

function Spacer({ size }) {
  const classes = useStyles({ size });

  return (
    <div className={classes.spacer} />
  );
}

export default Spacer;
