import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ReblocksFiatConversion } from './ReblocksFiatConversion';

storiesOf('ReblocksPayment', module).add('Default (USD)', () => {
  return <ReblocksFiatConversion />;
});
