/// <reference types="react" />
import * as React from 'react';
export interface PaymentResponse {
    token: string;
    status: string;
}
export interface Props {
    accountId: string;
    amount: number;
    onPaymentSuccess: (data: PaymentResponse) => void;
}
export interface State {
    token: string;
}
export declare class ReblocksPayment extends React.Component<Props, State> {
    constructor(props: Props);
    onPaymentSuccess: (data: PaymentResponse) => void;
    emptyReblocksDiv: () => void;
    renderBrainblocksButton: () => void;
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean;
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
