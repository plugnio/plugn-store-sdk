import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";   
export class ApplePayService {

    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    /**
     * Call your server to get the merchant session
     * @param event 
     * @returns 
     */
    async validateApplePayMerchant(event: any, restaurant_uuid: string) {

        const response = await this.axios.post('/payment/apple-pay/validate-merchant', {
            restaurant_uuid: restaurant_uuid || this.config.storeId,
            validationURL: event?.validationURL
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }

    async processAppleToken(event: any, order_uuid: string) {

        const response = await this.axios.post('/payment/apple-pay/process-payment', {
            ...event.payment,
            order_uuid: order_uuid
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
}