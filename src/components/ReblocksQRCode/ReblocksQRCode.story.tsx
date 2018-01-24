import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ReblocksQRCode } from './ReblocksQRCode';

import { ACCOUNT_ID } from '../../lib/';

storiesOf('ReblocksQRCode', module)
  .add('Default', () => {
    return <ReblocksQRCode accountId={ACCOUNT_ID} />;
  })
  .add('Default with Address', () => {
    return <ReblocksQRCode accountId={ACCOUNT_ID} showUrl={true} />;
  })
  .add('With Amount', () => {
    return <ReblocksQRCode accountId={ACCOUNT_ID} amount={1000} showUrl={true} />;
  })
  .add('With Amount and Label', () => {
    return (
      <ReblocksQRCode accountId={ACCOUNT_ID} amount={1000} label="For a good time" showUrl={true} />
    );
  })
  .add('Amount, Label and Message', () => {
    return (
      <ReblocksQRCode
        accountId={ACCOUNT_ID}
        amount={1000}
        label="For a good time"
        message="I'm a message"
        showUrl={true}
      />
    );
  })
  .add('RaiBlocks Purple', () => {
    return <ReblocksQRCode accountId={ACCOUNT_ID} fgColor="#8c43d5" />;
  });
