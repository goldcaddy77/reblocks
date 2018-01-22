import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { BrainblocksVerification } from './BrainblocksVerification';

storiesOf('BrainblocksVerification', module).add('Default', () => {
  return (
    <div style={{ padding: '20px' }}>
      <label>Current JPY Value</label>
      <span>
        {/* tslint:disable-next-line:max-line-length */}
        <BrainblocksVerification token="ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmtaWE4wYVc1aGRHbHZiaUk2SW5oeVlsOHpjbWwwYjNsNE5IcGphWGh6YUdaaVpYcG5OR0Y1WTJJME9YaGlkWEIzT1dkbmFXNXJNWEptYlRRemRHMDJkV2c0TjNRMGFXWjFlR2MxWkcwaUxDSmhiVzkxYm5RaU9pSXhJaXdpWVcxdmRXNTBYM0poYVNJNk1Td2libTl1WTJVaU9pSXlOelV6TmpjM1lpMDBPV0l4TFRSa09UY3RPRFJoWmkwNU9USXdOVEZtT0RaaU1UQWlMQ0ozWVd4c1pYUWlPaUl6TVRRNU5rUkZSRGxHT1VFeFFqYzNNVGMwUlRNNE5VUkVPREl5T0RaRk5VTkNRelE1TVRVd01rWkRRMFpCT0VNMU5rTTVNemt3TTBGQk1rUTRNVFpDSWl3aVlXTmpiM1Z1ZENJNkluaHlZbDh4TlhkeGNYZHZhbTR4YVdoNU1UaDNaemxwZFcxdFpUTXphbmhrTkRRMWVUbGhjbkJvTm1jNGJUZDZhMlJ1ZFc5elozUXpkM0kwYTJGaGNHc2lMQ0pqZFhKeVpXNWplU0k2SW5KaGFTSXNJbWxoZENJNk1UVXhOalU0TWpJNE1Dd2laWGh3SWpveE5URTJOVGcxT0Rnd2ZRLllJMzE4NEZhV1Y5VjVPbHZGWklLOWJrbjQ1ZjB1YmJaeHNTdEhjR3hCY00" />
      </span>
    </div>
  );
});
