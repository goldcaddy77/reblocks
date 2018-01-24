import { storiesOf } from '@storybook/react';
import * as React from 'react';

import Select from 'react-select';

import { ReblocksFiatConversion } from './ReblocksFiatConversion';

import { CURRENCY_CODES } from '../../lib/currency';
import { Currency } from '../../reblocks';

const options = CURRENCY_CODES.map((currency: string) => {
  return { label: currency, value: currency };
});

interface State {
  selectedOption: {
    label: string;
    value: string;
  };
}

class DynamicCurrencyWrapper extends React.Component<{}, State> {
  state = {
    selectedOption: { label: '', value: '' }
  };
  // tslint:disable-next-line:no-any
  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div>
        <div style={{ display: 'inline-block', width: 200, marginRight: 40 }}>
          <Select
            name="form-field-name"
            value={value}
            onChange={this.handleChange}
            options={options}
          />
        </div>
        <div style={{ display: 'inline-block', width: 200 }}>
          <label>Current {this.state.selectedOption.value} Value</label>
          <ReblocksFiatConversion currency={this.state.selectedOption.value as Currency} />
        </div>
      </div>
    );
  }
}

storiesOf('ReblocksFiatConversion', module)
  .add('Default (USD)', () => {
    return (
      <div>
        <label>Current USD Value</label>
        <span>
          <ReblocksFiatConversion />
        </span>
      </div>
    );
  })
  .add('EUR', () => {
    return (
      <div>
        <label>Current EUR Value</label>
        <span>
          <ReblocksFiatConversion currency="EUR" />
        </span>
      </div>
    );
  })
  .add('JPY', () => {
    return (
      <div>
        <label>Current JPY Value</label>
        <span>
          <ReblocksFiatConversion currency="JPY" />
        </span>
      </div>
    );
  })
  .add('Choose Currency', () => {
    return (
      <div>
        <DynamicCurrencyWrapper />
      </div>
    );
  });
