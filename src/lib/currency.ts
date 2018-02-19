import 'whatwg-fetch';

export const CMC_TICKER_URL = 'https://api.coinmarketcap.com/v1/ticker';

export interface CmcResponse {
  id?: string;
  name?: string;
  symbol?: string;
  rank?: string;
  price_usd?: string;
  price_btc?: string;
  '24h_volume_usd'?: string;
  market_cap_usd?: string;
  available_supply?: string;
  total_supply?: string;
  max_supply?: string;
  percent_change_1h?: string;
  percent_change_24h?: string;
  percent_change_7d?: string;
  last_updated?: string;
  price_eur?: string;
  '24h_volume_eur'?: string;
  market_cap_eur?: string;
  price_local: string;
}

export const CURRENCY_CODES = [
  'AUD',
  'BRL',
  'CAD',
  'CHF',
  'CLP',
  'CNY',
  'CZK',
  'DKK',
  'EUR',
  'GBP',
  'HKD',
  'HUF',
  'IDR',
  'ILS',
  'INR',
  'JPY',
  'KRW',
  'MXN',
  'MYR',
  'NOK',
  'NZD',
  'PHP',
  'PKR',
  'PLN',
  'RUB',
  'SEK',
  'SGD',
  'THB',
  'TRY',
  'TWD',
  'USD',
  'ZAR'
];

export type Currency =
  | 'AUD'
  | 'BRL'
  | 'CAD'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'CZK'
  | 'DKK'
  | 'EUR'
  | 'GBP'
  | 'HKD'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'JPY'
  | 'KRW'
  | 'MXN'
  | 'MYR'
  | 'NOK'
  | 'NZD'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'RUB'
  | 'SEK'
  | 'SGD'
  | 'THB'
  | 'TRY'
  | 'TWD'
  | 'USD'
  | 'ZAR';

export const CURRENCY_SYMBOLS = {
  AUD: '&#36;',
  BRL: '&#36;',
  CAD: '&#36;',
  CHF: '&#36;',
  CLP: '&#36;',
  CNY: '&#165;',
  CZK: 'Kč',
  DKK: 'kr',
  EUR: '&#8364;',
  GBP: '&#163;',
  HKD: 'HK&#36;',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '&#8362;',
  INR: '&#8377',
  JPY: '&#165;',
  KRW: '&#36;',
  MXN: '&#36;',
  MYR: 'RM',
  NOK: 'kr',
  NZD: 'NZ$',
  PHP: '&#8369;',
  PKR: 'Ɍs',
  PLN: 'zł',
  RUB: 'руб',
  SEK: 'kr',
  SGD: 'S$',
  THB: '&#3647;',
  TRY: 'TL',
  TWD: 'NT$',
  USD: '&#36;',
  ZAR: 'R'
};

export const getCurrencySymbol = (currency?: Currency) => {
  if (!currency) {
    return '';
  }
  return CURRENCY_SYMBOLS[currency];
};

export const getCurrentXRBPrice = (currency: Currency) => {
  return fetch(`${CMC_TICKER_URL}/nano/?convert=${currency}`)
    .then(response => {
      return response.json();
    })
    .then((response: CmcResponse[]) => {
      const payload = response && response[0];

      if (!payload) {
        return { price_local: 'Not Found' };
      }

      // The payload received from CMC is dynamic and contains an attribute called price_<currency_code> for
      // the supplied currency code, so we just tack on a new attribute called `price_local` to abstract this away
      // tslint:disable-next-line:no-any
      payload.price_local = (payload as any)[`price_${currency.toLowerCase()}`];
      return payload;
    });
};
