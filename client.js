"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.PlugnStoreConfig = exports.Cart = exports.CartItem = void 0;
var AxiosService_1 = require("./services/AxiosService");
var StoreService_1 = require("./services/StoreService");
var CartService_1 = require("./services/CartService");
var OrderService_1 = require("./services/OrderService");
var AuthService_1 = require("./services/AuthService");
var DeliveryZoneService_1 = require("./services/DeliveryZoneService");
var AddressService_1 = require("./services/AddressService");
var PaymentService_1 = require("./services/PaymentService");
var VoucherService_1 = require("./services/VoucherService");
var CityService_1 = require("./services/CityService");
//import { ThemeService } from './services/ThemeService';
var TranslateService_1 = require("./services/TranslateService");
var AccountService_1 = require("./services/AccountService");
var ApplePayService_1 = require("./services/ApplePayService");
var Item_1 = require("./models/Item");
var CartItem = /** @class */ (function (_super) {
    __extends(CartItem, _super);
    function CartItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qty = 0;
        _this.extraOptions = [];
        _this.variant = null;
        return _this;
    }
    return CartItem;
}(Item_1.Item));
exports.CartItem = CartItem;
//hashmap of cart items
var Cart = /** @class */ (function () {
    function Cart() {
    }
    return Cart;
}());
exports.Cart = Cart;
var PlugnStoreConfig = /** @class */ (function () {
    function PlugnStoreConfig() {
    }
    return PlugnStoreConfig;
}());
exports.PlugnStoreConfig = PlugnStoreConfig;
var Client = /** @class */ (function () {
    function Client(config) {
        this.config = config;
        // Initialize axios instance
        this.axiosInstance = (0, AxiosService_1.createAxiosInstance)({
            baseURL: config.baseURL,
            headers: {
                'Store-Id': config.storeId,
                'Language': config.language,
                'Currency': config.currency,
                'Token': config.token
            }
        });
        // Initialize services
        this.applePay = new ApplePayService_1.ApplePayService(this.axiosInstance, this.config);
        this.account = new AccountService_1.AccountService(this.axiosInstance, this.config);
        this.store = new StoreService_1.StoreService(this.axiosInstance, this.config);
        this.cart = new CartService_1.CartService(this.config);
        this.order = new OrderService_1.OrderService(this.axiosInstance, this.config);
        this.auth = new AuthService_1.AuthService(this.axiosInstance, this.config);
        this.delivery = new DeliveryZoneService_1.DeliveryZoneService(this.axiosInstance, this.config);
        this.address = new AddressService_1.AddressService(this.axiosInstance, this.config);
        this.payment = new PaymentService_1.PaymentService(this.axiosInstance, this.config);
        this.voucher = new VoucherService_1.VoucherService(this.axiosInstance, this.config);
        this.city = new CityService_1.CityService(this.axiosInstance, this.config);
        //this.theme = new ThemeService(this.axiosInstance, this.config);
        this.translate = new TranslateService_1.TranslateService(this.config);
    }
    return Client;
}());
exports.Client = Client;
