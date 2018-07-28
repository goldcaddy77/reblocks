import * as React from 'react';
import { Currency } from '../../lib/currency';
export interface Props {
    currency?: Currency;
}
export interface State {
    currencySymbol?: string;
    price?: string;
}
export declare class ReblocksFiatConversion extends React.Component<Props, State> {
    static defaultProps: {
        currency: string;
    };
    constructor(props: Props);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    updateCurrency: (currency?: "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "CNY" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "ILS" | "INR" | "JPY" | "KRW" | "MXN" | "MYR" | "NOK" | "NZD" | "PHP" | "PKR" | "PLN" | "RUB" | "SEK" | "SGD" | "THB" | "TRY" | "TWD" | "USD" | "ZAR" | undefined) => void;
    loadData: (currency?: "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "CNY" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "ILS" | "INR" | "JPY" | "KRW" | "MXN" | "MYR" | "NOK" | "NZD" | "PHP" | "PKR" | "PLN" | "RUB" | "SEK" | "SGD" | "THB" | "TRY" | "TWD" | "USD" | "ZAR" | undefined) => void;
    render(): JSX.Element;
}
