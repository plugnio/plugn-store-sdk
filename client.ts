import { createAxiosInstance } from './services/AxiosService';
import { StoreService } from './services/StoreService';
import { CartService } from './services/CartService';
import { OrderService } from './services/OrderService';
import { AuthService } from './services/AuthService';
import { DeliveryZoneService } from './services/DeliveryZoneService';
import { AddressService } from './services/AddressService';
import { PaymentService } from './services/PaymentService';
import { VoucherService } from './services/VoucherService';
import { CityService } from './services/CityService';
//import { ThemeService } from './services/ThemeService';
import { TranslateService } from './services/TranslateService';
import { AxiosInstance } from 'axios';
import { AccountService } from './services/AccountService';
import { ApplePayService } from './services/ApplePayService';
import { Item } from './models/Item';

export class CartItem extends Item {
  qty: number = 0;
  extraOptions: any[] = [];
  variant: any = null;
}

//hashmap of cart items
export class Cart {
  [key: string]: CartItem
}

export class PlugnStoreConfig {
  baseURL!: string;
 // apiKey?: string;
  storeId!: string;
  language!: string;
  currency!: string;
  token?: string;
  debug?: boolean;
  isLogin?: boolean;
  cart!: Cart;
  cartTotal!: number;
  cartLength!: number;
  shippingMethod?: {
    delivery_zone_id: string;
  };
  customerInfo?: {
    phone_number: string;
  };
}

export class Client {
 
  public config: PlugnStoreConfig;

  public store: StoreService;
  public cart: CartService;
  public order: OrderService;
  public auth: AuthService;
  public delivery: DeliveryZoneService;
  public address: AddressService;
  public payment: PaymentService;
  public voucher: VoucherService;
  public city: CityService;
  //public theme: ThemeService;
  public translate: TranslateService;
  public account: AccountService;
  public applePay: ApplePayService;
  private axiosInstance: AxiosInstance;

  constructor(config: PlugnStoreConfig) {

    this.config = config;

    // Initialize axios instance
    this.axiosInstance = createAxiosInstance({
      baseURL: config.baseURL,
      headers: {
        'Store-Id': config.storeId,
        'Language': config.language,
        'Currency': config.currency,
        'Token': config.token
      }
    });

    // Initialize services
    this.applePay = new ApplePayService(this.axiosInstance, this.config);
    this.account = new AccountService(this.axiosInstance, this.config);
    this.store = new StoreService(this.axiosInstance, this.config);
    this.cart = new CartService(this.config);
    this.order = new OrderService(this.axiosInstance, this.config);
    this.auth = new AuthService(this.axiosInstance, this.config);
    this.delivery = new DeliveryZoneService(this.axiosInstance, this.config);
    this.address = new AddressService(this.axiosInstance, this.config);
    this.payment = new PaymentService(this.axiosInstance, this.config);
    this.voucher = new VoucherService(this.axiosInstance, this.config);
    this.city = new CityService(this.axiosInstance, this.config);
    //this.theme = new ThemeService(this.axiosInstance, this.config);
    this.translate = new TranslateService(this.config);
  }
} 