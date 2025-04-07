import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";

export class AccountService {

    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    async getAccount() {
        const response = await this.axios.get('/account');
        return response.data;
    }

    async updateAccount(params: any) {
        const response = await this.axios.patch('/account', params);
        return response.data;
    }

    async deleteAccount() {
        const response = await this.axios.delete('/account');
        return response.data;
    }
}