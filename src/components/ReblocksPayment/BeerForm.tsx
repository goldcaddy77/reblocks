import * as React from 'react';

import { ACCOUNT_ID, Currency, getCurrentXRBPrice } from '../../lib/';

import { PaymentResponse, ReblocksPayment } from './ReblocksPayment';

export interface Props {
  onSuccess: (data: PaymentResponse) => void;
}

export interface State {
  currentXRBPrice?: number;
  xrbPerBeer?: number;
}

export class BeerForm extends React.Component<Props, State> {
  BEER_PRICE = 7.0;

  constructor(props: Props) {
    super(props);
    this.state = { currentXRBPrice: undefined, xrbPerBeer: undefined };
  }

  componentDidMount() {
    this.loadData('USD');
  }

  loadData = (currency?: Currency) => {
    getCurrentXRBPrice(currency as Currency)
      .then(response => {
        console.log('parsed json', response);
        console.log('xrb per beer', this.BEER_PRICE / parseFloat(response.price_local));
        this.setState({
          currentXRBPrice: parseFloat(response.price_local),
          xrbPerBeer: this.BEER_PRICE / parseFloat(response.price_local)
        });
      })
      .catch(ex => {
        console.log('parsing failed', ex);
      });
  };

  formatUSD = (value?: number): string => {
    if (!value) {
      return '';
    }
    return `$${value.toFixed(2)}`;
  };

  render() {
    return (
      <div>
        <p>
          Current cost of a delicious IPA in Boston: {this.formatUSD(this.BEER_PRICE)}
          <br />
          {this.state.currentXRBPrice && (
            <span>Current cost of XRB in USD: {this.formatUSD(this.state.currentXRBPrice)}</span>
          )}
          <br />
          {this.state.xrbPerBeer && <span>XRBs in a beer: {this.state.xrbPerBeer}</span>}
        </p>
        <p style={{ display: this.state.xrbPerBeer }}>
          <ReblocksPayment
            accountId={ACCOUNT_ID}
            amount={(this.state.xrbPerBeer || 0) * 1000000}
            onPaymentSuccess={this.props.onSuccess}
          />
        </p>
      </div>
    );
  }
}
