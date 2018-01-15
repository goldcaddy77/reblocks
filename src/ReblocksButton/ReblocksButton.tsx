// https://brainblocks.io/api/session/<token>/verify
// this.verifyToken(data.token);

import * as React from 'react';

// This module is not accessible as `brainblocks` here.  This import is just getting code into
// package and then we import via windown.brainblocks
import * as brainblocks from '../../lib/brainblocks';

export interface PaymentResponse {
  token: string;
  status: string;
}

export interface Props {
  accountId: string;
  amountXrb: number;
  onPaymentSuccess: (data: PaymentResponse) => void;
}

export interface State {
  token: string;
}

export class ReblocksButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { token: '' };
    console.log(brainblocks); // Avoid TS compilation issue complaining brainblocks isn't read
  }

  onPaymentSuccess = (data: PaymentResponse) => {
    this.setState({ token: data.token });
    if (this.props.onPaymentSuccess) {
      this.props.onPaymentSuccess(data);
    }
  };

  renderBrainblocksButton = () => {
    // tslint:disable-next-line:no-any
    (window as any).brainblocks.Button.render(
      {
        onPayment: this.onPaymentSuccess,
        payment: {
          amount: this.props.amountXrb,
          currency: 'rai',
          destination: this.props.accountId
        }
      },
      '#raiblocks-button'
    );
  };

  componentDidMount() {
    this.renderBrainblocksButton();
  }

  render() {
    return <div id="raiblocks-button" />;
  }
}
