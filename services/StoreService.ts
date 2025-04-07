import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";

export class StoreService {

  constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {
    //this.axios.defaults.headers['Store-Id']
  }

  /**
   * return promise for store detail
   * @returns Promise
   */
  async getStoreDetail() {
    let url = '/store/' + this.config.storeId + '?expand=noOfItems,categories,categories.noOfItems,isOpen,reopeningAt,webLinks,country,currency,currencies,' 
      + 'supportPickup,supportDelivery,storeTheme,openingHours';
    const response = await this.axios.get(url);
    return response.data;
  }

  /**
   * Get restaurant's branches
   */
  async getBusinessLocaiton(): Promise<any> {
    const response = await this.axios.get('/store/locations/' + this.config.storeId + '?expand=country');
    return response.data;
  }

  /**
   * Get all category's products
   */
  async getCategoryProductsBySlug(category_slug: string) {
    const response = await this.axios.get('/item/category/' + category_slug + '?restaurant_uuid=' + this.config.storeId);
    return response.data;
  }

  /**
   * Get all category's products
   */
  async getCategoryProducts(category_id: number) {
    const response = await this.axios.get('/item/' + category_id + '?restaurant_uuid=' + this.config.storeId);
    return response.data;
  }

  /**
   * return store items
   * @returns 
   */
  async getItems(page: number, category_id = null, keyword = null, category_slug = null) {
    let url = '/item/items?restaurant_uuid=' + this.config.storeId +
      '&expand=options,itemImage&page=' + page;//options.extraOptions,

    //per-page=4&

    if (keyword) {
      url += '&keyword=' + keyword;
    }

    if (category_id) {
      url += '&category_id=' + category_id;
    }

    if (category_slug) {
      url += '&category_slug=' + category_slug;
    }

    return await this.axios.get(url);
  }

  /**
   * return store items group by category
   * @returns 
   */
  async getCategoryItems(category_id = null, keyword = null, category_slug = null) {
    let url = '/item/category-items?restaurant_uuid=' + this.config.storeId +
      '&expand=items,items.options,items.itemImage';//options.extraOptions,

    if (keyword) {
      url += '&keyword=' + keyword;
    }

    if (category_id) {
      url += '&category_id=' + category_id;
    }

    if (category_slug) {
      url += '&category_slug=' + category_slug;
    }

    return (await this.axios.get(url)).data;
  }

  /**
   * Load Restaurant's menu
   */
  async loadRestaurantMenu(withoutItems = true) {
    let url = '/item?restaurant_uuid=' + this.config.storeId +
      '&expand=';

    if (withoutItems) {
      url += '&wihoutItems=1';
    }
    return (await this.axios.get(url)).data;
  }

  /**
   * Get menu data by restaurant ID
   *
  async getStoreMenu(): Promise<any> {

    return new Promise((resolve, reject) => {
      
      if (!authService.store || !categories || !items) {

        loading = true; 

        loadRestaurantMenu(true).then((response: any) => {

          //todo: move to listing with infinite scrolling 

          categories = [];

          items = [];

          response.restaurantMenu.forEach(category => {
            if (category.items.length > 0){
              categories.push(category);

              category.items.forEach(item => {
                items.push(item);
              });
            }
          });

          loading = false; 

          resolve(true);
        });

      } else {
        
        loading = false;

        resolve(true);
      }
    });

  }*/

  /**
   * load item data from db
   */
  async loadItemBySlug(slug: string) {
    const url = '/item/view/' + slug + '?expand=tabbyPromo,itemVariants,itemVariants.itemVariantImages,itemVariants.itemVariantOptions,itemVariants.itemVariantOptions.option,itemVariants.itemVariantOptions.extraOption,options,options.extraOptions,itemImages,itemVideos,itemSchema&restaurant_uuid=' + this.config.storeId;
    const response = await this.axios.get(url);
    return response.data;
  }

  /**
   * load item data from db
   */
  async loadItemData(item_uuid: string) {
    const url = '/item/detail?expand=tabbyPromo,itemVariants,itemVariants.itemVariantImages,itemVariants.itemVariantOptions,itemVariants.itemVariantOptions.option,itemVariants.itemVariantOptions.extraOption,options,options.extraOptions,itemImages,itemVideos,itemSchema&item_uuid=' + item_uuid + '&restaurant_uuid=' + this.config.storeId;
    const response = await this.axios.get(url);
    return response.data;
  } 
}