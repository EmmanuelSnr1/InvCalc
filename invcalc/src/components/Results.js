import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function Results({ profitPrice, lossPrice }) {
  return (
    <Card variant="outlined" style={{ marginTop: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="h2">Results</Typography>
        <Typography variant="body1" component="p">Sell Price for Desired Profit: {profitPrice.toFixed(2)}</Typography>
        <Typography variant="body1" component="p">Sell Price for Desired Loss: {lossPrice.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  );
}

export default Results;
