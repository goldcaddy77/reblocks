import 'whatwg-fetch';

export const BRAINBLOCKS_API_BASE_URL = 'https://brainblocks.io/api';

export interface BrainblocksVerificationResponse {
  token?: string;
  destination?: string;
  currency?: string;
  amount?: string;
  amount_rai?: number;
  received_rai?: number;
  fulfilled?: boolean;
}

export const verifyTransaction = (token: string) => {
  return fetch(`${BRAINBLOCKS_API_BASE_URL}/session/${token}/verify`)
    .then(response => {
      return response.json();
    })
    .then((response: BrainblocksVerificationResponse) => {
      console.log(response);
      return response;
    });
};
