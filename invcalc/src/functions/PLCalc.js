export function calculateProfit(investment, buyingPrice, desiredProfit) {
    const numberOfShares = investment / buyingPrice;
    return ((desiredProfit / numberOfShares) + buyingPrice).toFixed(2);
}

export function calculateLoss(investment, buyingPrice, lossLimit) {
    const numberOfShares = investment / buyingPrice;
    return ((buyingPrice) - (lossLimit / numberOfShares)).toFixed(2);
}
