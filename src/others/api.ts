import axios from 'axios';
import {CurrencyRate, CurrencyData} from './model';

const getRates = async (currencyCode: string): Promise<CurrencyData[]> => {
  const options = {
    method: 'get',
    url: `http://localhost:8000/rates/${currencyCode}`,
    headers: {
      'x-api-key': '85f7ccfd-677a-4e5a-a5eb-21c19734edf7',
    },
  };
  const response = await axios(options);
  console.log('RESPONSE>>>>', response.data);
  const apiResponse: CurrencyRate = response.data;

  return Object.entries(apiResponse).map(([currency, rateData]) => {
    return {
      currency: currency,
      data: rateData,
    };
  });
};

export const getRatesApi = (currencyCode: string): CurrencyData[] => {
  console.log(currencyCode);

  const apiResponse: CurrencyRate = {
    EUR: {
      rate: 1.1661482,
      name: 'Euro',
      symbol: '€',
    },
    USD: {
      rate: 1.2638436,
      name: 'US Dollar',
      symbol: '$',
    },
    CAD: {
      rate: 1.7173866,
      name: 'Canadian dollar',
      symbol: '$',
    },
    JPY: {
      rate: 191.63238,
      name: 'Japanese Yen',
      symbol: '¥',
    },
    NZD: {
      rate: 2.1018546,
      name: 'New Zealand Dollar',
      symbol: '$',
    },
    THB: {
      rate: 46.45587,
      name: 'Thai Bhat',
      symbol: '฿',
    },
    CNY: {
      rate: 9.1417166,
      name: 'Chinese Yuan',
      symbol: '¥',
    },
    AUD: {
      rate: 1.9147731,
      name: 'Australian Dollar',
      symbol: '$',
    },
    CHF: {
      rate: 1.1399409,
      name: 'Swiss Franc',
      symbol: 'Fr',
    },
    ZAR: {
      rate: 23.606591,
      name: 'South African Rand',
      symbol: 'R',
    },
  };
  return Object.entries(apiResponse).map(([currency, rateData]) => {
    return {
      currency: currency,
      data: rateData,
    };
  });
};

export {getRates};
