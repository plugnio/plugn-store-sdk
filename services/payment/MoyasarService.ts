import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../../client";

export class MoyasarService {
    constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    }

    async getMoyasarInitParams(order_uuid: string): Promise<any> {
        const response = await this.axios.get('/payment/moyasar?order_uuid=' + order_uuid);
        return response.data;
    }
}