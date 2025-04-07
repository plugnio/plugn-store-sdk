import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../../client";

export class TabbyService {
    
    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    async getTabbyParams(order_uuid: string): Promise<any> {
        const response = await this.axios.get('/payment/tabby?order_uuid=' + order_uuid);
        return response.data;
    }

    async tabbyCreateOrder(payment_id: any, order_uuid: any): Promise<any> {
        const response = await this.axios.get('/payment/tabby/create?payment_id=' + payment_id + '&order_uuid=' + order_uuid);
        return response.data;
    }

    async tabbyConfirmOrder(payment_id: any): Promise<any> {
        const response = await this.axios.get('/payment/tabby/confirm?payment_id=' + payment_id);
        return response.data;
    }

    async tabbyError(error: any): Promise<any> {
        const response = await this.axios.get('/payment/tabby/error?errorType=' + error);
        return response.data;
    }
}