import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { ChangeEvent } from 'react';

import { ACCOUNT_ID } from '../../lib/';

import { PaymentResponse, ReblocksPayment } from './ReblocksPayment';

export interface State {
  accountId: string;
  amount: number;
}

export interface Props {
  onSuccess: (data: PaymentResponse) => void;
}

export class PaymentForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { accountId: ACCOUNT_ID, amount: 10000 };
  }

  onChangeAccountId = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    this.setState({ accountId: event.currentTarget.value });
  };

  onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    this.setState({ amount: parseFloat(event.currentTarget.value) });
  };

  render() {
    return (
      <form>
        <p>
          Filling in the form below will dynamically change the payment button with the new account
          and amount specified
        </p>
        <fieldset>
          <label>Account ID</label>
          <input
            type="text"
            value={this.state.accountId}
            placeholder="Account ID"
            onChange={this.onChangeAccountId}
          />
          <label>Amount (in rai, 1,000,000 rai = 1 XRB)</label>

          <input
            type="number"
            value={this.state.amount}
            placeholder="Amount of rai"
            onChange={this.onChangeAmount}
          />
          <ReblocksPayment
            accountId={this.state.accountId}
            amount={this.state.amount}
            onPaymentSuccess={this.props.onSuccess}
          />
        </fieldset>
      </form>
    );
  }
}
