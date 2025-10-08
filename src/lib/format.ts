const currencyFormatter = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("de-AT", {
  maximumFractionDigits: 0,
});

const percentFormatter = new Intl.NumberFormat("de-AT", {
  style: "percent",
  maximumFractionDigits: 1,
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(Math.round(value));
}

export function formatNumber(value: number) {
  return numberFormatter.format(Math.round(value));
}

export function formatPercent(value: number) {
  return percentFormatter.format(value);
}

export function formatPaybackMonths(value: number) {
  if (!Number.isFinite(value) || value <= 0) {
    return "Profit ab Monat 1";
  }
  if (value > 120) {
    return "> 10 Jahre";
  }
  return `${value.toFixed(1).replace(".", ",")} Monate`;
}
