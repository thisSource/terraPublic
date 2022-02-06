import { portfolio } from "./portfolioData";

let portfolioSymbols = "";
for (const [key, value] of Object.entries(portfolio)) {
  portfolioSymbols += `${value.symbol},`;
}

export default async function handler(req: any, res: any) {
  let stockResponse = await fetch(
    `https://cloud.iexapis.com/v1/stock/market/batch?&types=quote&symbols=${portfolioSymbols}&token=${process.env.IEX_API_KEY}`
  );
  let stockData = await stockResponse.json();

  let currencyResponse = await fetch(
    `https://cloud.iexapis.com/v1/fx/convert?symbols=USDEUR,USDSEK&amount=73&token=${process.env.IEX_API_KEY}`
  );
  let currencyData = await currencyResponse.json();

  function tonsOfCO2avoided(GW: number) {
    const kWhperGW = 2483404087.773434;
    const lbsCO2perMWh = 1562.4;
    const mLfactor = 4.536;
    return (lbsCO2perMWh * mLfactor * (GW * kWhperGW)) / 10000000;
  }

  for (const [key, value] of Object.entries(portfolio)) {
    value.companyName = stockData[key].quote.companyName;
    value.stockValueUSD = stockData[key].quote.latestPrice;
    value.CO2avoidedPerStock =
      tonsOfCO2avoided(value.GW) / value.numberOfShares;
    value.CO2avoidedHolding = value.CO2avoidedPerStock * value.holdingVolume;
    value.holdingValueUSD = value.stockValueUSD * value.holdingVolume;
  }

  let totalPortfolioValueUSD = 0;
  let totalPortfolioCO2avoided = 0;
  let co2KgPerUSD = 0;
  let co2KgPerSEK = 0;

  for (const [key, value] of Object.entries(portfolio)) {
    totalPortfolioValueUSD += value.holdingValueUSD;
    totalPortfolioCO2avoided += value.CO2avoidedHolding;
  }
  co2KgPerUSD = (totalPortfolioCO2avoided * 1000) / totalPortfolioValueUSD;
  co2KgPerSEK = co2KgPerUSD / currencyData[1].rate;

  res.status(200).json([{ co2KgPerUSD }, { co2KgPerSEK }]);
}
