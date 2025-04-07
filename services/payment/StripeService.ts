import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../../client";
export class StripeService {
    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    async getStripeInitParams(order_uuid: string): Promise<any> {
        const response = await this.axios.get('/payment/stripe/client-secret?order_uuid=' + order_uuid);
        return response.data;
    }
}
