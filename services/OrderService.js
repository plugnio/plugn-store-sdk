"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
var OrderService = /** @class */ (function () {
    function OrderService(axios, config) {
        this.axios = axios;
        this.config = config;
    }
    /**
     * @param params
     * @returns
     */
    OrderService.prototype.applyBankDiscount = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/order/apply-bank-discount/?restaurant_uuid=' + params.restaurant_uuid + '&phone_number=' + params.phone_number + '&bank_name=' + params.bank_name)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * load promo code data
     */
    OrderService.prototype.loadPromoCodeData = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/order/apply-promo-code?restaurant_uuid=' + params.restaurant_uuid + '&phone_number=' + params.phone_number + '&code=' + params.code)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * apply voucher
     * @param params
     * @returns
     */
    OrderService.prototype.applyPromoCodeData = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/order/apply-promo-code/' + params.order_uuid + '?restaurant_uuid=' +
                            params.restaurant_uuid + '&code=' + params.code;
                        if (!this.config.isLogin && this.config.customerInfo && this.config.customerInfo.phone_number) {
                            url += '&phone_number=' + this.config.customerInfo.phone_number;
                        }
                        return [4 /*yield*/, this.axios.post(url, {})];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * save cart details
     * @param params
     * @returns
     */
    OrderService.prototype.placeAnOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/order/' + this.config.storeId, params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * update order on change of delivery address, payment method etc,...
     * @param params
     * @returns
     */
    OrderService.prototype.updateOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.patch('/order/' + params.order_uuid, params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * initialize order without payment, to set payment form by order id + showing actual order total in confirm page
     * @param params
     * @returns
     */
    OrderService.prototype.placeDummyOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/order/init-order/' + this.config.storeId, params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * validate cart items
     * @param cart_items
     * @returns
     */
    OrderService.prototype.validateCart = function (cart_items) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/order/validate-cart', {
                            cart_items: cart_items
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * save order instructions
     * @param order_uuid
     * @param order_instruction
     * @returns
     */
    OrderService.prototype.saveInstruction = function (order_uuid, order_instruction) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/order/instruction/' + order_uuid, {
                            order_instruction: order_instruction
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get order details
     */
    OrderService.prototype.getOrderDetail = function (order_uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/order/order-details/' + order_uuid + '/' + this.config.storeId +
                            '?expand=area,area.city,state,country,voucher,orderStatusInEnglish,orderStatusInArabic,orderItems,orderItems.itemImage,orderItems.orderItemExtraOptions,businessLocation,pickupLocation,payment';
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * list orders
     * @param page
     * @returns
     */
    OrderService.prototype.getOrders = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/order?expand=orderStatusInEnglish,orderStatusInArabic,orderItems,orderItems.itemImage&page='
                            + page + '&restaurant_uuid=' + this.config.storeId;
                        return [4 /*yield*/, this.axios.get(url)
                            //.catch(err => handleAxiosError(err));
                        ];
                    case 1:
                        response = _a.sent();
                        //.catch(err => handleAxiosError(err));
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * add item to customer's cart
     */
    OrderService.prototype.addItemToTheCart = function (params, order_uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/order/item/' + order_uuid, params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * add extra option to customer's cart
     */
    OrderService.prototype.addExtraOptionToTheCart = function (params, order_item_id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.post('/order/extra-option/' + order_item_id, params)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    OrderService.prototype.downloadInvoice = function (order_uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/order/download-invoice/' + order_uuid)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    return OrderService;
}());
exports.OrderService = OrderService;
