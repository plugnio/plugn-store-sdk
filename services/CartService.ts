import { PlugnStoreConfig } from "../client";
import { Item } from "../models/Item";

export class CartService {

    constructor(private config: PlugnStoreConfig) {
    }
 
    cartQuantity(item: Item, extraOptions: any[]) {
    
        let cart_hash_seed = item.item_uuid; 

        extraOptions.forEach(extraOptn => { 
            if(extraOptn.extra_option_id) {
                cart_hash_seed += ":" + extraOptn.extra_option_id;
            } else {
                cart_hash_seed += ":" + extraOptn.extra_option_name;
            }
        }); 
    
        return this.config.cart[cart_hash_seed]? 
            this.config.cart[cart_hash_seed].qty: 0;
    }

    validateQty(item: Item, qty: number, extraOptions: any[], variant: any) {


        //get qty from cart 
        const cartQty = this.cartQuantity(item, extraOptions);

        let haveError = false; 

        if(item.track_quantity) {

            if(item.item_type == 1) {

                if(item.stock_qty < qty + cartQty) {
                    /*showToast('Max quantity available is {qty}', {
                        qty: item.stock_qty
                    }, "middle");*/
                    haveError = true;
                    return false;
                }

                //todo: extra option qty validation 

                for(let extraOption of extraOptions) {
                    
                    if(extraOption.stock_qty < qty + cartQty) {
                        /*showToast('Max quantity available is for {option} is {qty}', {
                            option: langContent(extraOption.extra_option_name, extraOption.extra_option_name_ar),
                            qty: item.stock_qty
                        }, "middle");*/
                        haveError = true;
                        return false;
                    }
                }

            } else if(item.item_type == 2 && variant.stock_qty < qty + cartQty) {

                /*showToast('Max quantity available is {qty}', {
                    qty: variant.stock_qty
                }, "middle");*/
                haveError = true;
                return false;
            } 
        }
    
        if(!haveError)
            return true;
    }

    addToCart(item: Item, qty: number = 1, extraOptions: any[] = [], variant: any = null) {
    
        if(!this.validateQty(item, qty, extraOptions, variant)) {
            return false;
        }
        
        //store.commit('addToCart', { item, qty, extraOptions, variant, openCart });

        /*showToast('{item} added to cart', {
            item: langContent(item.item_name, item.item_name_ar)
        }, "top");*/


        let cart_hash_seed = item.item_uuid; 

        extraOptions.forEach(extraOptn => { 
            if(extraOptn.extra_option_id) {
                cart_hash_seed += ":" + extraOptn.extra_option_id;
            } else {
                cart_hash_seed += ":" + extraOptn.extra_option_name;
            }
        }); 
 
        const cart_item_id = cart_hash_seed;
        //extraOptions.length > 0 ? btoa(cart_hash_seed): cart_hash_seed;
 
        if (this.config.cart[cart_item_id]) {
            this.config.cart[cart_item_id].qty = this.config.cart[cart_item_id].qty + qty;
        } else {
            //if not available 
                    
            this.config.cart[cart_item_id] = {
                ...item,
                variant,
                qty,
                extraOptions
            };
        }
 
        this.updateCartTotal();

        return true;
    }

    updateCart(index: string, item: Item, qty = 1) {
    
        const extraOptions = this.config.cart[index].extraOptions;   
        const variant = this.config.cart[index].variant; 

        if(!this.validateQty(item, qty, extraOptions, variant)) {
            return;
        }

        this.config.cart[index].qty = qty;

        if(qty == 0) {
            delete this.config.cart[index];
        } 

        this.updateCartTotal();
        /*showToast('{item} quantity updated in cart', {
            item: langContent(item.item_name, item.item_name_ar)
        }, "top");*/
    }
    
    plusCartItem(index: string, item: Item) {
 
        const qty = this.config.cart[index].qty + 1;
 
        this.updateCart(index, this.config.cart[index], qty);

        /*showToast('{item} quantity updated in cart', {
            item: langContent(item.item_name, item.item_name_ar)
        }, "top");*/
    }

    minusCartItem(index: string) { 
        //const item = this.config.cart[index]; 
        const qty = this.config.cart[index].qty - 1;
    
        this.updateCart(index, this.config.cart[index], qty);

        /*showToast('{item} quantity updated in cart',{
            item: langContent(item.item_name, item.item_name_ar)
        }, "top");*/
    }

    deleteCart(index: string) {
        delete this.config.cart[index];

        this.updateCartTotal();
    // showToast(item.item_name + ' removed from cart', "top");
    }

    updateCartTotal() {
        let qtyTotal = 0;
        let total = 0; 

        for (const i in this.config.cart) {
            qtyTotal += this.config.cart[i].qty;
            total += this.config.cart[i].qty * this.config.cart[i].item_price;
        }

        this.config.cartTotal = total;
        this.config.cartLength = qtyTotal;
    }
}