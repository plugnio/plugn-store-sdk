import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";
export class VoucherService {

    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    async getVouchers(): Promise<any> {
        const response = await this.axios.get('/vouchers');
        return response.data;
    }
}

