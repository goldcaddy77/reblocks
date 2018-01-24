# Reblocks - React RaiBlocks Payments and other Components

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-56b3b4.svg)](https://github.com/prettier/prettier)
[![npm version](https://img.shields.io/npm/v/reblocks.svg)](https://www.npmjs.org/package/reblocks)
[![CircleCI](https://circleci.com/gh/goldcaddy77/reblocks/tree/master.svg?style=shield)](https://circleci.com/gh/goldcaddy77/reblocks/tree/master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A React wrapper around the [Brainblocks](https://github.com/brainblocks/brainblocks) payment button that makes
it simple to start taking Raiblocks payments in React projects.

Demo: [goldcaddy77.github.io/reblocks](https://goldcaddy77.github.io/reblocks/?selectedKind=ReblocksPayment)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

## Install

```bash
yarn add reblocks
```

## Usage

```tsx
import { ReblocksPayment } from 'reblocks';

const onSuccess = (data: PaymentResponse) => {
  console.log('Got transaction token', data.token);
};

const Button = (
  <ReblocksPayment
    accountId="xrb_3ritoyx4zcixshfbezg4aycb49xbupw9ggink1rfm43tm6uh87t4ifuxg5dm"
    amount={200000}
    onPaymentSuccess={onSuccess}
  />
);
```

Note: this package is built with TypeScript and already contains the relevant TypeScript type definitions.

## API

### ReblocksPayment

To initiate a payment, use the `ReblocksPayment` component.  The `ReblocksPayment` takes in the following props:

- `accountId` {string} account to send funds to
- `amount` {string} ammount of `xrb` to send (Note: 1 xrb = 1/1,000,000 XRB)
- `onPaymentSuccess` {function} function to run on successful payment.  This is passed { token: 'TOKEN'}

Link to [demo](https://goldcaddy77.github.io/reblocks/?selectedKind=ReblocksPayment)

### ReblocksFiatConversion

To display the current value of XRB in a fiat currency, use the `ReblocksFiatConversion` component.  The
`ReblocksFiatConversion` takes in the following props:

- `currency` {currency} 3 digit fiat currency you want to display the current value of 1 XRB

Link to [demo](https://goldcaddy77.github.io/reblocks/?selectedKind=ReblocksFiatConversion)

### ReblocksQRCode

To create a QR code for payments, use the `ReblocksQRCode` component.  The `ReblocksQRCode` component takes in the
following props:

- `accountId` {string} account to send funds to
- `amount` {string - optional} ammount of `xrb` to send (Note: 1 xrb = 1/1,000,000 XRB)
- `label` {string - optional} see - [RaiBlocks QR Code specification](https://github.com/clemahieu/raiblocks/wiki/URI-and-QR-Code-Standard)
- `message` {string - optional} see - [RaiBlocks QR Code specification](https://github.com/clemahieu/raiblocks/wiki/URI-and-QR-Code-Standard)

You can also style the QR Code itself using the params we pass into [qrcode.react](https://github.com/zpao/qrcode.react):

- `size` {number - optional} Size
- `bgColor` {string (CSS color) - optional} Background color
- `fgColor` {string (CSS color) - optional} Foreground color

Link to [demo](https://goldcaddy77.github.io/reblocks/?selectedKind=ReblocksQRCode)

## Donate

If you like this project and want to help support future development, test it out by buying me a 🍺:
 xrb_3ritoyx4zcixshfbezg4aycb49xbupw9ggink1rfm43tm6uh87t4ifuxg5dm

## Contribute

PRs accepted.  Note that this library uses a bunch of linters/code formatters to keep things consistent:

- [prettier](https://github.com/prettier/prettier) - TypeScript formatting
- [tslint](https://github.com/palantir/tslint) - TypeScript linting
- [markdownlint](https://github.com/mivok/markdownlint) - Markdown linting

## License

MIT © Dan Caddigan
