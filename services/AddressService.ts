import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";

export class AddressService {

    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    async getAddresses(page: number) {
        const response = await this.axios.get('/addresses?page=' + page + '&expand=area,city,state,country');
        //.catch((err: any) => handleAxiosError(err));
        return response;
    }

    async getAddress(address_id: number) {
        const response = await this.axios.get('/addresses/' + address_id + '?expand=area,city,state,country');
        return response.data;
    }

    async addAddress(params: any) {
        const response = await this.axios.post('/addresses', params);
        return response.data;
    }

    async updateAddress(address_id: string, params: any) {
        const response = await this.axios.patch('/addresses/' + address_id, params);
        return response.data;
    }

    async deleteAddress(address_id: string) {
        const response = await this.axios.delete('/addresses/' + address_id);
        return response.data;
    }
}           