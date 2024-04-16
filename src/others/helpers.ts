import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

export const parseNumber = (value: number) => {
  return value.toFixed(2);
};

export const saveAppScreenState = (items: Record<string, string>) => {
  RNSecureStorage.multiSet(items, {accessible: ACCESSIBLE.WHEN_UNLOCKED})
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

export const retrieveLastCurrency = (): Promise<{
  [key: string]: string;
} | null> => {
  return RNSecureStorage.multiGet([
    'lastToCurrency',
    'lastToSymbol',
    'lastFromCurrency',
    'lastFromSymbol',
  ]);
};
