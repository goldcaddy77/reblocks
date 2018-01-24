import { boolean, number, text } from '@storybook/addon-knobs';
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
  })
  .add('Dynamic QR Code', () => {
    return (
      <div>
        <p>Change the values in the KNOBS panel on the right to dynamically update the QR code</p>
        <ReblocksQRCode
          accountId={text('Account ID', ACCOUNT_ID)}
          amount={number('Amount', 1000)}
          fgColor={text('Color', '#8c43d5')}
          label={text('Label', 'For a good time')}
          message={text('Message', "I'm a message")}
          showUrl={boolean('Show URL', true)}
        />
      </div>
    );
  });
