import 'whatwg-fetch';
export declare const BRAINBLOCKS_API_BASE_URL = "https://brainblocks.io/api";
export interface BrainblocksVerificationResponse {
    token?: string;
    destination?: string;
    currency?: string;
    amount?: string;
    amount_rai?: number;
    received_rai?: number;
    fulfilled?: boolean;
}
export declare const verifyTransaction: (token: string) => Promise<BrainblocksVerificationResponse>;
