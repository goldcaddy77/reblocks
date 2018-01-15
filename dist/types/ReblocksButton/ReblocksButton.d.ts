import * as React from 'react';
export interface PaymentResponse {
    token: string;
    status: string;
}
export interface Props {
    accountId: string;
    amountXrb: number;
    onPaymentSuccess: (data: PaymentResponse) => void;
}
export interface State {
    token: string;
}
export declare class ReblocksButton extends React.Component<Props, State> {
    constructor(props: Props);
    onPaymentSuccess: (data: PaymentResponse) => void;
    renderBrainblocksButton: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
