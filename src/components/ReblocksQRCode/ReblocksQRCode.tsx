import * as QRCode from 'qrcode.react';
import * as queryString from 'query-string';
import * as React from 'react';

export interface OptionalProps {
  amount?: number;
  bgColor?: string;
  fgColor?: string;
  label?: string;
  message?: string;
  size?: number;
  showUrl?: boolean;
}

export interface Props extends OptionalProps {
  accountId: string;
}

const ReblocksQRCode: React.StatelessComponent<Props> = (props): JSX.Element => {
  const { accountId, amount, label, message, showUrl, ...otherProps } = props;
  let address = `xrb:${accountId}`;

  const params: OptionalProps = {};
  if (amount) {
    params.amount = amount;
  }
  if (label) {
    params.label = label;
  }
  if (message) {
    params.message = message;
  }

  const qs = queryString.stringify(params);
  address = qs ? `${address}?${qs}` : address;

  const qrComponent = <QRCode value={`${address}${qs}`} {...otherProps} />;

  if (showUrl) {
    return (
      <div>
        <p>{qrComponent}</p>
        <p>{address}</p>
      </div>
    );
  }

  return qrComponent;
};

ReblocksQRCode.defaultProps = {
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  showUrl: false,
  size: 128
};

export { ReblocksQRCode };
