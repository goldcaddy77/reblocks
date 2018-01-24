/// <reference types="react" />
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
declare const ReblocksQRCode: React.StatelessComponent<Props>;
export { ReblocksQRCode };
