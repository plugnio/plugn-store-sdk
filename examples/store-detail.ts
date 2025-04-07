import { Client, PlugnStoreConfig } from "../client";

const config: PlugnStoreConfig = {
    baseURL: "https://api.plugn.io/v2",
    storeId: "rest_d7f4f8b8-ebc7-11ea-808a-0673128d0c9c",
    language: "ar",
    currency: "KWD",
    cart: {},
    cartTotal: 0,
    cartLength: 0,
    isLogin: false,
}

const client = new Client(config);

client.store.getStoreDetail().then(res => {
    console.log(res);
}).catch(err => {
    console.error(err);
});