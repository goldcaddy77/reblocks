# Reblocks - Raiblocks Payments for React

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-56b3b4.svg)](https://github.com/prettier/prettier)
[![npm version](https://img.shields.io/npm/v/reblocks.svg)](https://www.npmjs.org/package/reblocks)
[![CircleCI](https://circleci.com/gh/goldcaddy77/reblocks/tree/master.svg?style=shield)](https://circleci.com/gh/goldcaddy77/reblocks/tree/master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A React wrapper around the [Brainblocks](https://github.com/brainblocks/brainblocks) payment button that makes
it simple to start taking Raiblocks payments in React projects.

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
const onSuccess = (data: PaymentResponse) => {
  console.log('Got transaction token', data.token);
};

const Button = (
  <ReblocksButton
    accountId="xrb_3ritoyx4zcixshfbezg4aycb49xbupw9ggink1rfm43tm6uh87t4ifuxg5dm"
    amountXrb={200000}
    onPaymentSuccess={onSuccess}
  />
);
```

## API

### ReblocksButton

The `ReblocksButton` takes in the following props:

- `accountId` {string} account to send funds to
- `amountXrb` {string} ammount of `rai` to send (Note: 1 rai = 1/1,000,000 XRB)
- `onPaymentSuccess` {function} function to run on successful payment.  This is passed { token: 'TOKEN'}

## Donate

If you like this project and want to help support future development, test it out by buying me a 🍺:  xrb_3ritoyx4zcixshfbezg4aycb49xbupw9ggink1rfm43tm6uh87t4ifuxg5dm

## Contribute

PRs accepted.  Note that code uses [prettier](https://github.com/prettier/prettier).

## License

MIT © Dan Caddigan
