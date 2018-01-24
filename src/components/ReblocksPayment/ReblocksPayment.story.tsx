import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
// tslint:disable-next-line:no-duplicate-imports

import { ACCOUNT_ID } from '../../lib/';

import { BeerForm } from './BeerForm';
import { PaymentForm } from './PaymentForm';
import { PaymentResponse, ReblocksPayment } from './ReblocksPayment';

const onSuccess = (data: PaymentResponse) => {
  action('Payment successful.')();
  action(`Transaction ID: ${data.token}`)();
};

storiesOf('ReblocksPayment', module)
  .add('Donate 1 XRB', () => {
    action('Click the button to start payment')();

    return (
      <div>
        <p>
          By clicking the button below and making payment to the address, you'll donate 1 XRB to
          this project
        </p>
        <ReblocksPayment accountId={ACCOUNT_ID} amount={1000000} onPaymentSuccess={onSuccess} />
      </div>
    );
  })
  .add('Donate a 🍺', () => {
    return <BeerForm onSuccess={onSuccess} />;
  })
  .add('Small test transaction', () => {
    action('Click the button to start payment')();

    return (
      <div>
        <p>The button below will prompt you to send a test transaction of 1000 rai (~2 cents)</p>
        <ReblocksPayment accountId={ACCOUNT_ID} amount={1000} onPaymentSuccess={onSuccess} />
      </div>
    );
  })
  .add('Dynamic Button', () => {
    return <PaymentForm onSuccess={onSuccess} />;
  });
