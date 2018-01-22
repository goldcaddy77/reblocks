import * as React from 'react';
import { BrainblocksVerificationResponse } from '../../lib/brainblocks';
export interface Props {
    token: string;
}
export interface State {
    verificationResult?: BrainblocksVerificationResponse;
}
export declare class BrainblocksVerification extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    verifyToken: (token?: string | undefined) => void;
    loadData: (token?: string | undefined) => void;
    render(): JSX.Element;
}
