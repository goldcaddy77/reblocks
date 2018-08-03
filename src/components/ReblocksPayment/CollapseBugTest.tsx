import * as React from 'react';

import { ACCOUNT_ID, Currency, getCurrentXRBPrice } from '../../lib/';

import { PaymentResponse, ReblocksPayment } from './ReblocksPayment';

export interface Props {
  onSuccess: (data: PaymentResponse) => void;
}

export interface State {
  currentXRBPrice?: number;
  something?: string;
  price: number;
  onSuccess: (data: PaymentResponse) => void;
  accountId: string;
}

export class CollapseBugTest extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { accountId: ACCOUNT_ID, currentXRBPrice: undefined, something: undefined, price: 1, onSuccess: (data: PaymentResponse) => {} };
  }

  componentDidMount() {
    this.loadData('USD');
  }

  loadData = (currency?: Currency) => {
    getCurrentXRBPrice(currency as Currency)
      .then(response => {
        console.log('parsed json', response);
        this.setState({
          currentXRBPrice: parseFloat(response.price_local)
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
          <h2>THIS BUG IS FIXED FOR NOW. TEST FOLLOWING FLOW:</h2>
          1. Click the reblocks button to initiate a payment.<br />
          2. Click the collapse button which sets the state of something irrelevant to the reblocks component.<br /><br />
          <button onClick={() => this.setState({ something: "irrelevant" })}>Collapse reblocks component by setting irrevelant state of parent container.</button><br />
          <button onClick={() => this.setState({ price: this.state.price + 1 })}>Update component by setting relevant state (price) of parent container.</button><br />
          <button onClick={() => this.setState({ onSuccess: (data: PaymentResponse) => console.log(this.state.price) })}>Update component by setting relevant state (onSuccess) of parent container.</button><br />
        </p>
        <p>
          <ReblocksPayment
            accountId={this.state.accountId}
            amount={this.state.price}
            onPaymentSuccess={this.state.onSuccess}
          />
        </p>
      </div>
    );
  }
}
