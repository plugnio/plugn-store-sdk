import { RestaurantBranch } from "./restaurant_branch";
import { RestaurantPaymentMethod } from "./restaurant_payment_method";
import { RestaurantTheme } from "./restaurant_theme";
import {Country} from "./country";
import { Currency } from "./currency";

export class Restaurant {
  restaurant_uuid:string;
  country_id: string;
  currency_id: string;//default currency
  name: string;
  name_ar: string;
  tagline: string;
  tagline_ar: string;
  restaurant_domain: string;
  app_id: string;
  restaurant_status: string;
  thumbnail_image: string;
  logo: string;
  support_delivery: string;
  version: string;
  sitemap_require_update: string;
  support_pick_up: string;
  hide_request_driver_button: string;
  phone_number: string;
  phone_number_country_code: string;
  restaurant_email: string;
  restaurant_created_at: string;
  restaurant_updated_at: string;
  plan_name: string;
  business_id: string;
  business_entity_id: string;
  wallet_id: string;
  merchant_id: string;
  operator_id: string;
  live_api_key: string;
  test_api_key: string;
  business_type: string;
  vendor_sector: string;
  license_number: string;
  not_for_profit: string;
  authorized_signature_issuing_date: string;
  authorized_signature_expiry_date: string;
  authorized_signature_title: string;
  authorized_signature_file: string;
  authorized_signature_file_id: string;
  authorized_signature_file_purpose: string;
  iban: string;
  owner_first_name: string;
  owner_last_name: string;
  owner_email: string;
  owner_number: any;
  owner_phone_country_code: string;
  identification_issuing_date: string;
  identification_expiry_date: string;
  identification_file_front_side: string;
  identification_file_id_front_side: string;
  identification_title: string;
  identification_file_purpose: string;
  restaurant_email_notification: string;
  retention_email_sent: string;
  enable_gift_message: string;
  developer_id: string;
  armada_api_key: string;
  phone_number_display: number;
  store_branch_name: string;
  custom_css: string;
  store_layout: number;
  commercial_license_issuing_date: string;
  commercial_license_expiry_date: string;
  commercial_license_title: string;
  commercial_license_file: string;
  commercial_license_file_id: string;
  commercial_license_file_purpose: string;
  platform_fee: string;
  google_analytics_id: string;
  facebook_pixil_id: string;
  snapchat_pixil_id: string;
  show_opening_hours: string;
  instagram_url: string;
  schedule_order: string;
  schedule_interval: string;
  mashkor_branch_id: string;
  live_public_key: string;
  test_public_key: string;
  site_id: string;
  company_name: string;
  is_tap_enable: string;
  has_deployed: number;
  payment_gateway_queue_id: string;
  identification_file_back_side: string;
  identification_file_id_back_side: string;
  default_language: string;
  country: any;
  plan_id: any;
  currency: any;//default currency 
  currencies: Currency[];
  restaurantPaymentMethods: RestaurantPaymentMethod[];
  restaurantBranches: RestaurantBranch;
  restaurantTheme: RestaurantTheme;
  itemsCount: any;
  export_sold_items_data_in_specific_date_range:any;
  totalOrders:number;
  totalItems: number;
  isCashEnabled:boolean;
  isKnetEnabled:boolean;
  isCreditCardEnabled:boolean;
  isMadaEnabled:boolean;
  isBenefitEnabled:boolean;
  isArmadaEnabled:boolean;
  isMashkorEnabled: boolean;
  countryByOwnerCountryCode:Country;
  countryByPhoneCountryCode:Country;
}
