export interface ScreenState {
  lastFromCurrency: string;
  lastToCurrency: string;
  lastToSymbol: string;
  lastFromSymbol: string;
}

export type RateData = {
  rate: number;
  name: string;
  symbol: string;
};

export type CurrencyData = {
  currency: string;
  data: RateData;
};

export type CurrencyRate = {[currency: string]: RateData}; // Record<string, RateData>;
