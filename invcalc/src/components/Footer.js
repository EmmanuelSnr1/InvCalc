import React from 'react';
import { Grid, Paper, Typography, Link, TextField, Button } from '@material-ui/core';
import Logo from '../assets/logo.png'; // import the logo here


function Footer() {
  return (
    <Paper elevation={0} style={{ padding: '50px', background: '#282c34', color: '#fff' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        <img src={Logo} alt="Logo" width ="50" height ="50" />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Links</Typography>
          <Link href="#" color="inherit">Home</Link><br/>
          <Link href="#" color="inherit">About Us</Link><br/>
          <Link href="#" color="inherit">Sign In</Link><br/>
          <Link href="#" color="inherit">Sign Up</Link><br/>
          <Typography variant="body2" style={{ marginTop: '20px' }}>&copy; 2023 Net Nimble Labs</Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Newsletter</Typography>
          <Typography variant="body2">Subscribe to our newsletter:</Typography>
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff' }}
            fullWidth
          />
          <Button variant="contained" color="primary" style={{ textTransform: 'none' }}>Subscribe</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;
