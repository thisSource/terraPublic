import { portfolio } from "./portfolioData";

export default async function handler(req, res) {
  let data = [];
  for (let i = 0; i < portfolio.length; i++) {
    const response = await fetch(
      `https://cloud.iexapis.com/stable/stock/${portfolio[i].symbol}/quote?token=${process.env.IEX_API_KEY}`
    );
    data.push(await response.json());
  }

  function mergeArrayObjects(arr1, arr2) {
    return arr1.map((item, i) => {
      if (item.symbol === arr2[i].symbol) {
        //merging two objects
        return Object.assign({}, item, arr2[i]);
      }
    });
  }

  portfolio = mergeArrayObjects(portfolio, data);

  res.status(200).json(portfolio);
}
