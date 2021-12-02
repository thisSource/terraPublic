import dayjs from "dayjs";

function amountHandler(t: any, scaler: number, posOrNeg: number) {
  return (
    (parseInt(t.amount.value.unscaledValue) /
      Math.pow(10, parseInt(t.amount.value.scale))) *
    scaler *
    posOrNeg
  );
}

function formatAmount(amount: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    currencyDisplay: "narrowSymbol",
  }).format(amount);
}

function formatDate(date: string) {
  return dayjs(date).format("DD, MMMM, YYYY");
}

function formatMonth(date: string) {
  return dayjs(date).format("MMMM");
}

export { formatAmount, formatDate, formatMonth, amountHandler };
