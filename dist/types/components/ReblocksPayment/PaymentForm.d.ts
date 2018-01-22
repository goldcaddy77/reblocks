import * as React from 'react';
import { PaymentResponse } from './ReblocksPayment';
export interface State {
    accountId: string;
    amount: number;
}
export interface Props {
    onSuccess: (data: PaymentResponse) => void;
}
export declare class PaymentForm extends React.Component<Props, State> {
    constructor(props: Props);
    onChangeAccountId: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeAmount: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
