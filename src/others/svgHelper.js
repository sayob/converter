import React, { ReactNode } from 'react';
// import { SvgProps } from 'react-native-svg';

import {
  GBP,
  EUR,
  USD,
  CAD,
  JPY,
  NZD,
  THB,
  CNY,
  AUD,
  CHF,
  ZAR,
} from '../assets/svgs';

export const getCurrencyIcon = (type: string): ReactNode => {
  switch (type.toLowerCase()) {
    case 'gbp':
      return <GBP />;

    case 'eur':
      return <EUR />;

    case 'usd':
      return <USD />;

    case 'cad':
      return <CAD />;

    case 'jpy':
      return <JPY />;

    case 'nzd':
      return <NZD />;

    case 'thb':
      return <THB />;

    case 'cny':
      return <CNY />;

    case 'aud':
      return <AUD />;

    case 'chf':
      return <CHF />;

    case 'zar':
      return <ZAR />;

    default:
      return <GBP />;
  }
};