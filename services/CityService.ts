import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";

export class CityService {

    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    async getCityList(): Promise<any> {
        const response = await this.axios.get('/city');
        return response;
    }
}