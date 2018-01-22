import * as React from 'react';

import { BrainblocksVerificationResponse, verifyTransaction } from '../../lib/brainblocks';

export interface Props {
  token: string;
}

export interface State {
  verificationResult?: BrainblocksVerificationResponse;
}

export class BrainblocksVerification extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { verificationResult: undefined };
  }

  componentDidMount() {
    this.verifyToken(this.props.token);
  }

  verifyToken = (token?: string) => {
    this.loadData(token);
  };

  loadData = (token?: string) => {
    verifyTransaction(token as string)
      .then(response => {
        this.setState({ verificationResult: response });
        console.log(response);
      })
      .catch(ex => {
        console.log('parsing failed', ex);
      });
  };

  render() {
    return (
      <div>
        {!this.state.verificationResult && <div>Verification in progress</div>}
        {this.state.verificationResult && (
          <div>
            Result verified:<br />
            token: {this.state.verificationResult.token}
            amount: {this.state.verificationResult.amount}
            fulfilled: {this.state.verificationResult.fulfilled}
          </div>
        )}
      </div>
    );
  }
}
