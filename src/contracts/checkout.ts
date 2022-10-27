export interface CheckoutDetails {
  order_id: string;
}

export interface Merchant {
  id: string;
  apiKey: string;
  branding_details: MerchantDetails;
}

export interface Token {
  amount: number;
  currency_symbol: string;
}

export interface Session {
  id: string;
  merchant_id: string; // TODO: check if something better can be used here
  order_id: string;
  amount_value: number; // Amount always in $ or MATIC
  pricing: Record<string, Token>;
  expires_at: string; // ISO date string
  created_at: string;
}

export interface MerchantDetails {
  logo: string;
  app_url: string;
  brand_color: string;
}
