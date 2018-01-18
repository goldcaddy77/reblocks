import * as React from 'react';

import { Currency, getCurrencySymbol, getCurrentXRBPrice } from '../../lib/currency';

export interface Props {
  currency?: Currency;
}

export interface State {
  currencySymbol?: string;
  price?: string;
}

export class ReblocksFiatConversion extends React.Component<Props, State> {
  static defaultProps = {
    currency: 'USD'
  };

  constructor(props: Props) {
    super(props);
    this.state = { price: undefined };
  }

  componentDidMount() {
    this.updateCurrency(this.props.currency);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.currency !== this.props.currency) {
      this.updateCurrency(nextProps.currency);
    }
  }

  updateCurrency = (currency?: Currency) => {
    this.loadData(currency);
    this.setState({ currencySymbol: getCurrencySymbol(currency) });
  };

  loadData = (currency?: Currency) => {
    getCurrentXRBPrice(currency as Currency)
      .then(response => {
        console.log('parsed json', response);
        this.setState({ price: response.price_local });
      })
      .catch(ex => {
        console.log('parsing failed', ex);
      });
  };

  render() {
    return (
      <div>
        <span
          style={{ marginRight: 3 }}
          dangerouslySetInnerHTML={{ __html: this.state.currencySymbol as string }}
        />
        {this.state.price && parseFloat(this.state.price || '').toFixed(2)}
      </div>
    );
  }
}
