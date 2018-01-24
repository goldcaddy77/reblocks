import * as brainblocks from 'brainblocks';
import * as React from 'react';

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

export class ReblocksPayment extends React.Component<Props, State> {
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

    brainblocks.Button.render(
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

  componentDidMount() {
    this.renderBrainblocksButton();
  }

  render() {
    return <div id="reblocks" />;
  }
}
