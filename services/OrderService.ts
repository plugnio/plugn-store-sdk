import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";
export class OrderService {

    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    /**
     * @param params 
     * @returns 
     */
    async applyBankDiscount(params: any): Promise<any> {
        const response = await this.axios.get('/order/apply-bank-discount/?restaurant_uuid=' + params.restaurant_uuid + '&phone_number=' + params.phone_number + '&bank_name=' + params.bank_name);
        return response.data;
    }

    /**
     * load promo code data
     */
    async loadPromoCodeData(params: any): Promise<any> {
        const response = await this.axios.get('/order/apply-promo-code?restaurant_uuid=' + params.restaurant_uuid + '&phone_number=' + params.phone_number + '&code=' + params.code);
        return response.data;
    }

    /**
     * apply voucher
     * @param params 
     * @returns 
     */
    async applyPromoCodeData(params: any): Promise<any> {
        let url = '/order/apply-promo-code/' + params.order_uuid + '?restaurant_uuid=' + 
            params.restaurant_uuid + '&code=' + params.code;

        if(!this.config.isLogin && this.config.customerInfo && this.config.customerInfo.phone_number) {
            url += '&phone_number=' + this.config.customerInfo.phone_number;
        }
            
        const response = await this.axios.post(url, {});
        return response.data;
    }

    /**
     * save cart details
     * @param params 
     * @returns 
     */
    async placeAnOrder(params: any): Promise<any> {
        const response = await this.axios.post('/order/' + this.config.storeId, params);
        return response.data;
    }

    /**
     * update order on change of delivery address, payment method etc,... 
     * @param params 
     * @returns 
     */
    async updateOrder(params: any): Promise<any> {
        const response = await this.axios.patch('/order/' + params.order_uuid, params);
        return response.data;
    }

    /**
     * initialize order without payment, to set payment form by order id + showing actual order total in confirm page
     * @param params 
     * @returns 
     */
    async placeDummyOrder(params: any): Promise<any> {
        const response = await this.axios.post('/order/init-order/' + this.config.storeId, params);
        return response.data;
    }

    /**
     * validate cart items
     * @param cart_items 
     * @returns 
     */
    async validateCart(cart_items: any[]): Promise<any> {
        const response = await this.axios.post('/order/validate-cart', {
            cart_items: cart_items
        });
        return response.data;
    }

    /**
     * save order instructions
     * @param order_uuid 
     * @param order_instruction 
     * @returns 
     */
    async saveInstruction(order_uuid: string, order_instruction: string): Promise<any> {
        const response = await this.axios.post('/order/instruction/' + order_uuid, {
            order_instruction: order_instruction
        });
        return response.data;
    }

    /**
     * Get order details
     */
    async getOrderDetail(order_uuid: string): Promise<any> {
        const url = '/order/order-details/' + order_uuid + '/' + this.config.storeId +
        '?expand=area,area.city,state,country,voucher,orderStatusInEnglish,orderStatusInArabic,orderItems,orderItems.itemImage,orderItems.orderItemExtraOptions,businessLocation,pickupLocation,payment';
        const response = await this.axios.get(url);
        return response.data;
    }

    /**
     * list orders
     * @param page 
     * @returns 
     */
    async getOrders(page: number): Promise<any> {
        const url = '/order?expand=orderStatusInEnglish,orderStatusInArabic,orderItems,orderItems.itemImage&page='
            + page + '&restaurant_uuid=' + this.config.storeId;
        const response = await this.axios.get(url)
        //.catch(err => handleAxiosError(err));
        return response; 
    }

    /**
     * add item to customer's cart
     */
    async addItemToTheCart(params: any, order_uuid: string): Promise<any> {
        const response = await this.axios.post('/order/item/' + order_uuid, params);
        return response.data;
    }

    /**
     * add extra option to customer's cart
     */
    async addExtraOptionToTheCart(params: any, order_item_id: string): Promise<any> {
        const response = await this.axios.post('/order/extra-option/' + order_item_id, params);
        return response.data;
    } 

    async downloadInvoice(order_uuid: string): Promise<any> {
        const response = await this.axios.get('/order/download-invoice/' + order_uuid);
        return response.data;
    } 
}