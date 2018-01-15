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
  amount: number;
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

  emptyReblocksDiv = () => {
    const node = document.getElementById('reblocks');

    while (node && node.hasChildNodes()) {
      const child = node && node.firstChild;
      if (child) {
        node.removeChild(child);
      }
    }
  };

  renderBrainblocksButton = () => {
    this.emptyReblocksDiv();

    // tslint:disable-next-line:no-any
    (window as any).brainblocks.Button.render(
      {
        onPayment: this.onPaymentSuccess,
        payment: {
          amount: this.props.amount,
          currency: 'rai',
          destination: this.props.accountId
        }
      },
      '#reblocks'
    );
  };

  componentDidUpdate() {
    this.renderBrainblocksButton();
  }

  render() {
    return <div id="reblocks" />;
  }
}
