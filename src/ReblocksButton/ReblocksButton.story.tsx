import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { PaymentResponse, ReblocksButton } from './ReblocksButton';

const onSuccess = (data: PaymentResponse) => {
  console.log('Got transaction token', data.token);
};

storiesOf('ReblocksButton', module).add('Interactive', () => {
  return (
    <ReblocksButton
      accountId="xrb_3ritoyx4zcixshfbezg4aycb49xbupw9ggink1rfm43tm6uh87t4ifuxg5dm"
      amountXrb={200000}
      onPaymentSuccess={onSuccess}
    />
  );
});
