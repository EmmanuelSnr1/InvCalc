import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

function InputField({ onInputChange }) {
  const [investment, setInvestment] = useState('');
  const [buyingPrice, setBuyingPrice] = useState('');
  const [desiredProfit, setDesiredProfit] = useState('');
  const [lossLimit, setLossLimit] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if (investment && buyingPrice && desiredProfit && lossLimit) {
        // Make sure to convert input values into numbers before passing to onInputChange
        onInputChange(Number(investment), Number(buyingPrice), Number(desiredProfit), Number(lossLimit));
      }
    }


  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField 
            label="Initial Investment" 
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            fullWidth
        />
        </Grid>

        <Grid item xs={12}>
          <TextField 
            label="Buying Price" 
            value={buyingPrice}
            onChange={e => setBuyingPrice(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField 
            label="Desired Profit" 
            value={desiredProfit}
            onChange={e => setDesiredProfit(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField 
            label="Loss Limit" 
            value={lossLimit}
            onChange={e => setLossLimit(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>Calculate</Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default InputField;
