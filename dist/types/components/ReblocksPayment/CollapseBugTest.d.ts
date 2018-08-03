/// <reference types="react" />
import * as React from 'react';
import { PaymentResponse } from './ReblocksPayment';
export interface Props {
    onSuccess: (data: PaymentResponse) => void;
}
export interface State {
    currentXRBPrice?: number;
    something?: string;
    price: number;
    onSuccess: (data: PaymentResponse) => void;
    accountId: string;
}
export declare class CollapseBugTest extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    loadData: (currency?: "AUD" | "BRL" | "CAD" | "CHF" | "CLP" | "CNY" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HUF" | "IDR" | "ILS" | "INR" | "JPY" | "KRW" | "MXN" | "MYR" | "NOK" | "NZD" | "PHP" | "PKR" | "PLN" | "RUB" | "SEK" | "SGD" | "THB" | "TRY" | "TWD" | "USD" | "ZAR" | undefined) => void;
    formatUSD: (value?: number | undefined) => string;
    render(): JSX.Element;
}
