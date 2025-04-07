import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";

export class PaymentService {

    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    async getPaymentMethodOptions(): Promise<any> {
        const response = await this.axios.get('/payment');
        return response.data;
    }
}

