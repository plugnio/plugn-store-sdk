"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
var CartService = /** @class */ (function () {
    function CartService(config) {
        this.config = config;
    }
    CartService.prototype.cartQuantity = function (item, extraOptions) {
        var cart_hash_seed = item.item_uuid;
        extraOptions.forEach(function (extraOptn) {
            if (extraOptn.extra_option_id) {
                cart_hash_seed += ":" + extraOptn.extra_option_id;
            }
            else {
                cart_hash_seed += ":" + extraOptn.extra_option_name;
            }
        });
        return this.config.cart[cart_hash_seed] ?
            this.config.cart[cart_hash_seed].qty : 0;
    };
    CartService.prototype.validateQty = function (item, qty, extraOptions, variant) {
        //get qty from cart 
        var cartQty = this.cartQuantity(item, extraOptions);
        var haveError = false;
        if (item.track_quantity) {
            if (item.item_type == 1) {
                if (item.stock_qty < qty + cartQty) {
                    /*showToast('Max quantity available is {qty}', {
                        qty: item.stock_qty
                    }, "middle");*/
                    haveError = true;
                    return false;
                }
                //todo: extra option qty validation 
                for (var _i = 0, extraOptions_1 = extraOptions; _i < extraOptions_1.length; _i++) {
                    var extraOption = extraOptions_1[_i];
                    if (extraOption.stock_qty < qty + cartQty) {
                        /*showToast('Max quantity available is for {option} is {qty}', {
                            option: langContent(extraOption.extra_option_name, extraOption.extra_option_name_ar),
                            qty: item.stock_qty
                        }, "middle");*/
                        haveError = true;
                        return false;
                    }
                }
            }
            else if (item.item_type == 2 && variant.stock_qty < qty + cartQty) {
                /*showToast('Max quantity available is {qty}', {
                    qty: variant.stock_qty
                }, "middle");*/
                haveError = true;
                return false;
            }
        }
        if (!haveError)
            return true;
    };
    CartService.prototype.addToCart = function (item, qty, extraOptions, variant) {
        if (qty === void 0) { qty = 1; }
        if (extraOptions === void 0) { extraOptions = []; }
        if (variant === void 0) { variant = null; }
        if (!this.validateQty(item, qty, extraOptions, variant)) {
            return false;
        }
        //store.commit('addToCart', { item, qty, extraOptions, variant, openCart });
        /*showToast('{item} added to cart', {
            item: langContent(item.item_name, item.item_name_ar)
        }, "top");*/
        var cart_hash_seed = item.item_uuid;
        extraOptions.forEach(function (extraOptn) {
            if (extraOptn.extra_option_id) {
                cart_hash_seed += ":" + extraOptn.extra_option_id;
            }
            else {
                cart_hash_seed += ":" + extraOptn.extra_option_name;
            }
        });
        var cart_item_id = cart_hash_seed;
        //extraOptions.length > 0 ? btoa(cart_hash_seed): cart_hash_seed;
        if (this.config.cart[cart_item_id]) {
            this.config.cart[cart_item_id].qty = this.config.cart[cart_item_id].qty + qty;
        }
        else {
            //if not available 
            this.config.cart[cart_item_id] = __assign(__assign({}, item), { variant: variant, qty: qty, extraOptions: extraOptions });
        }
        this.updateCartTotal();
        return true;
    };
    CartService.prototype.updateCart = function (index, item, qty) {
        if (qty === void 0) { qty = 1; }
        var extraOptions = this.config.cart[index].extraOptions;
        var variant = this.config.cart[index].variant;
        if (!this.validateQty(item, qty, extraOptions, variant)) {
            return;
        }
        this.config.cart[index].qty = qty;
        if (qty == 0) {
            delete this.config.cart[index];
        }
        this.updateCartTotal();
        /*showToast('{item} quantity updated in cart', {
            item: langContent(item.item_name, item.item_name_ar)
        }, "top");*/
    };
    CartService.prototype.plusCartItem = function (index, item) {
        var qty = this.config.cart[index].qty + 1;
        this.updateCart(index, this.config.cart[index], qty);
        /*showToast('{item} quantity updated in cart', {
            item: langContent(item.item_name, item.item_name_ar)
        }, "top");*/
    };
    CartService.prototype.minusCartItem = function (index) {
        //const item = this.config.cart[index]; 
        var qty = this.config.cart[index].qty - 1;
        this.updateCart(index, this.config.cart[index], qty);
        /*showToast('{item} quantity updated in cart',{
            item: langContent(item.item_name, item.item_name_ar)
        }, "top");*/
    };
    CartService.prototype.deleteCart = function (index) {
        delete this.config.cart[index];
        this.updateCartTotal();
        // showToast(item.item_name + ' removed from cart', "top");
    };
    CartService.prototype.updateCartTotal = function () {
        var qtyTotal = 0;
        var total = 0;
        for (var i in this.config.cart) {
            qtyTotal += this.config.cart[i].qty;
            total += this.config.cart[i].qty * this.config.cart[i].item_price;
        }
        this.config.cartTotal = total;
        this.config.cartLength = qtyTotal;
    };
    return CartService;
}());
exports.CartService = CartService;
