import * as React from 'react';
import 'whatwg-fetch';

export enum Currency {
  AUD = 'AUD',
  BRL = 'BRL',
  CAD = 'CAD',
  CHF = 'CHF',
  CLP = 'CLP',
  CNY = 'CNY',
  CZK = 'CZK',
  DKK = 'DKK',
  EUR = 'EUR',
  GBP = 'GBP',
  HKD = 'HKD',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  JPY = 'JPY',
  KRW = 'KRW',
  MXN = 'MXN',
  MYR = 'MYR',
  NOK = 'NOK',
  NZD = 'NZD',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  RUB = 'RUB',
  SEK = 'SEK',
  SGD = 'SGD',
  THB = 'THB',
  TRY = 'TRY',
  TWD = 'TWD',
  ZAR = 'ZAR'
}

export interface Props {
  currency?: Currency;
}

export interface State {
  price?: number;
}

export const CMC_TICKER_URL = 'https://api.coinmarketcap.com/v1/ticker';

export class ReblocksFiatConversion extends React.Component<Props, State> {
  static defaultProps = {
    currency: 'USD'
  };

  constructor(props: Props) {
    super(props);
    this.state = { price: undefined };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    fetch(`${CMC_TICKER_URL}/raiblocks/?convert=${this.props.currency}`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log('parsed json', json);
        this.setState({ price: json[0].price_usd });
      })
      .catch(ex => {
        console.log('parsing failed', ex);
      });
  };

  render() {
    return <div>{this.state.price}</div>;
  }
}
