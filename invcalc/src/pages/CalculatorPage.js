import React, { useState } from 'react';
import InputField from '../components/InputField';
import Results from '../components/Results';
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Spacer from '../components/Spacer';
import { calculateProfit, calculateLoss } from '../functions/PLCalc';
import Footer from '../components/Footer';


function CalculatorPage() {
  const [profitPrice, setProfitPrice] = useState(0);
  const [lossPrice, setLossPrice] = useState(0);

    const handleInputChange = (investment, buyingPrice, desiredProfit, lossLimit) => {
        const sellingPriceForProfit = calculateProfit(investment, buyingPrice, desiredProfit);
        const sellingPriceForLoss = calculateLoss(investment, buyingPrice, lossLimit);

        setProfitPrice(Number(sellingPriceForProfit));
        setLossPrice(Number(sellingPriceForLoss));
    }; 




  return (
    <div>
      <NavBar />
      <Hero />
      <Spacer size='50px' />
    <Container maxWidth="md">
        <InputField onInputChange={handleInputChange} />
        <Results profitPrice={profitPrice} lossPrice={lossPrice} />
    </Container>
    <Spacer size='50px' />
    <Spacer size='50px' />
    <Footer />
    </div>
  );
}

export default CalculatorPage;
