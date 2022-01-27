import { portfolio } from "./portfolioData";

export default async function handler(req, res) {
  let data = [];
  for (let i = 0; i < portfolio.length; i++) {
    const response = await fetch(
      `https://cloud.iexapis.com/stable/stock/${portfolio[i].symbol}/quote?token=${process.env.IEX_API_KEY}`
    );
    data.push(await response.json());
  }
  const responseEx = await fetch(
    `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.FC_API_KEY}&base_currency=USD`
  );
  let dataEx = await responseEx.json();

  function mergeArrayObjects(arr1, arr2) {
    return arr1.map((item, i) => {
      if (item.symbol === arr2[i].symbol) {
        //merging two objects
        return Object.assign({}, item, arr2[i]);
      }
    });
  }

  function tonsOfCO2avoided(GW) {
    const kWhperGW = 2483404087.773434;
    const lbsCO2perMWh = 1562.4;
    const MLfactor = 4.536;
    return (lbsCO2perMWh * MLfactor * (GW * kWhperGW)) / 10000000;
  }

  portfolio = mergeArrayObjects(portfolio, data);

  let portfolioValue = portfolio
    .map((item) => {
      return item["latestPrice"] * item.portfolioVolume;
    })
    .reduce((init, add) => {
      return init + add;
    });

  let totalCO2reduction = portfolio
    .map((item) => {
      return (
        (tonsOfCO2avoided(item.GW) / item.numberOfShares) * item.portfolioVolume
      );
    })
    .reduce((init, add) => {
      return init + add;
    });

  // In KG
  let CO2perDollar = (totalCO2reduction * 1000) / portfolioValue;
  let CO2perSEK = CO2perDollar / dataEx.data.SEK;

  res
    .status(200)
    .json([{ CO2perDollar: CO2perDollar }, { CO2perSEK: CO2perSEK }]);
}
