# plugn-store-sdk

**Client config interface **

```
export class CartItem extends Item {
  qty: number = 0;
  extraOptions: any[] = [];
  variant: any = null;
}

//hashmap of cart items
export class Cart {
  [key: string]: CartItem
}

export interface PlugnStoreConfig {
  baseURL: string;
 // apiKey?: string;
  storeId: string;
  language: string;
  currency: string;
  debug?: boolean;
  isLogin: boolean;
  token: string;
  cart: Cart;
  cartTotal: number;
  cartLength: number;
  shippingMethod: {
    delivery_zone_id: string;
  };
  customerInfo: {
    customer_name: string;
    email: string;
    phone_number: string;
  };
}
```

**Sample config **
***https://list.plugn.store ***

```
const config = {
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

```