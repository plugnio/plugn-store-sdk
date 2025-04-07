import { AxiosInstance } from "axios";
import { PlugnStoreConfig } from "../client";

export class DeliveryZoneService {

  constructor(private axios: AxiosInstance, private config: PlugnStoreConfig) {

  }

  async getCountriesAvailableForDelivery(keyword = '', onlyCountries = false): Promise<any> {

    let url = '/delivery-zone/list-of-countries/' + this.config.storeId + '?expand=areaDeliveryZone';

    if (keyword)
      url += '&keyword=' + keyword;

    if (onlyCountries) {
      url += '&onlyCountries=true';
    }

    const response = await this.axios.get(url);
    return response.data;
  }

  async getCountries(keyword = ''): Promise<any> {
    const response = await this.axios.get('/delivery-zone/countries?keyword=' + keyword);
    return response.data;
  }

  async getAreas(city_id: number, keyword = '', page = 1): Promise<any> {
    const response = await this.axios.get('/delivery-zone/city-areas/' + city_id + '?keyword=' + keyword + '&page=' + page);
    return response;
  }

  async getCountryCities(country_id: number, keyword = '', page = 1): Promise<any> {
    const response = await this.axios.get('/delivery-zone/country-cities/' + country_id + '?keyword=' + keyword + '&page=' + page);
    return response;
  }

  async getStateCities(state_id: number, keyword = '', page = 1): Promise<any> {
    const response = await this.axios.get('/delivery-zone/state-cities/' + state_id + '?keyword=' + keyword + '&page=' + page);
    return response;
  }

  async getCountryStates(country_id: number, keyword = ''): Promise<any> {
    const response = await this.axios.get('/delivery-zone/country-states/' + country_id + '?keyword=' + keyword);
    return response.data;
  }

  /**
   * Get PickupLocations
   */
  async getPickupLocations(): Promise<any> {
    const response = await this.axios.get('/delivery-zone/list-pickup-locations/' + this.config.storeId);
    return response.data;
  }

  /**
  * Get listOfCountriesAvailableForDelivery
  */
  async getDeliveryAreaList(countryId: number): Promise<any> {
    const response = await this.axios.get('/delivery-zone/list-of-areas/' + this.config.storeId + '/' + countryId);
    return response.data;
  }

  /**
   * Get states
   */
  async getStates(country_id: number, keyword = ''): Promise<any> {
    const response = await this.axios.get('/delivery-zone/states/' + country_id + '?expand=areaDeliveryZone&keyword=' + keyword);
    return response;
  }

  /**
   * Get cities
   */
  async getCities(state_id: number, keyword = ''): Promise<any> {
    const response = await this.axios.get('/delivery-zone/cities/' + state_id + '?expand=areaDeliveryZone&keyword=' + keyword);
    return response;
  }

  /**
   * Get restaurant's delivery area data
   */
  async getDeliveryZone(delivery_zone_id: any, area_id = null): Promise<any> {
    let url = '/delivery-zone/' + this.config.storeId + '/' + delivery_zone_id;

    if (area_id)
      url = url + '?area_id=' + area_id;

    const response = await this.axios.get(url);

    return response.data;
  }

  /**
   * get city by lat long
   * @param latitude 
   * @param longitude 
   * @returns 
   */
  async getCityByLocation(latitude: number, longitude: number): Promise<any> {
    let url = '/delivery-zone/city-by-location?latitude=' + latitude + '&longitude=' + longitude;
    const response = await this.axios.get(url);
    return response.data;
  }

  /**
   * return delivery zone for tax + delivery fee details by location provided
   * @param state_id
   * @param city_id 
   * @param area_id 
   * @returns 
   */
  async getDeliveryZoneByLocation(city_id: any, area_id = null, state_id = null): Promise<any> {
    let url = '/delivery-zone/by-location?expand=area,city,deliveryZone,deliveryZone.businessLocation';

    if (state_id)
      url = url + '&state_id=' + state_id;

    if (city_id)
      url = url + '&city_id=' + city_id;

    if (area_id)
      url = url + '&area_id=' + area_id;

    const response = await this.axios.get(url);

    return response.data;
  }

  /**
   * Get restaurant's delivery area data
   */
  async getPickupLocationData(business_location_id: number): Promise<any> {
    const response = await this.axios.get('/delivery-zone/pickup-location/' + this.config.storeId + '/' + business_location_id);
    return response.data;
  }

  /**
   *  load Schedule DateData
   */
  async getScheduleData(): Promise<any> {

    let items = [];

    for (let i of Object.keys(this.config.cart)) {

      items.push({
        'prep_time_in_min': this.config.cart[i].prep_time_in_min
      })
    }

    const param = {
      'cart': items
    };

    const url = '/delivery-zone/get-delivery-time?delivery_zone_id='
      + this.config.shippingMethod.delivery_zone_id;

    const response = await this.axios.post(url, param);

    return response.data;
  }
}

/**
 * todo: refactor
 * get selected shipping method from local storage
 *
function getSelectedShippingMethodDataFromLocalStorage(): Promise<any> {

    return new Promise((resolve, reject) => {

      Storage.get({ key: 'shipping_methodV.0' }).then(async (response: any) => {

        response = JSON.parse(response.value);

        let selectedShippingMethod = response;

        if (selectedShippingMethod && selectedShippingMethod.order_mode == 1) {

          country_id = selectedShippingMethod.country_id;

          if (selectedShippingMethod.area_id && selectedShippingMethod.delivery_zone_id && selectedShippingMethod.deliveryZone.delivery_zone_id)
            selected_delivery_zone_id = selectedShippingMethod.deliveryZone.delivery_zone_id;
          else if (selectedShippingMethod.country_id && selectedShippingMethod.delivery_zone_id)
            selected_delivery_zone_id = selectedShippingMethod.delivery_zone_id;
          else if (selectedShippingMethod.area_id && !selectedShippingMethod.hasOwnProperty('delivery_zone_id')) {
            await Storage.clear().then((e) => {
              window.location.reload();
            });
          }

          if (authService.store) {
            if ((response.delivery_zone_id || response.deliveryZone)) {


              let delivery_zone_id = null;
              let area_id = null;

              if (response.area_id && response.deliveryZone && response.deliveryZone.delivery_zone_id) {

                delivery_zone_id = response.delivery_zone_id;
                area_id = response.area_id;

              } else if (response.country_id && response.delivery_zone_id)
                delivery_zone_id = response.delivery_zone_id;


              getDeliveryZone(delivery_zone_id, area_id).then(result => {

                if (result.operation && result.operation == 'error') {
                  Storage.remove({ key: 'shipping_methodV.0' });
                  eventService.shippingMethodUpdated$.next(null);
                  resolve(false);
                }

                else if (result.delivery_zone_id == delivery_zone_id) {
                  eventService.shippingMethodUpdated$.next(selectedShippingMethod);
                  resolve(true);
                }

              });

            }
          } else {
            storeService.getStoreMenu().then(res => {

              if (res && (response.delivery_zone_id || response.deliveryZone)) {


                let delivery_zone_id = null;
                let area_id = null;

                if (response.area_id && response.deliveryZone && response.deliveryZone.delivery_zone_id) {

                  delivery_zone_id = response.delivery_zone_id;
                  area_id = response.area_id;

                } else if (response.country_id && response.delivery_zone_id)
                  delivery_zone_id = response.delivery_zone_id;


                getDeliveryZone(delivery_zone_id, area_id).then(result => {

                  if (result.operation && result.operation == 'error') {
                    Storage.remove({ key: 'shipping_methodV.0' });

                    eventService.shippingMethodUpdated$.next(null);

                    resolve(false);
                  }

                  else if (result.delivery_zone_id == delivery_zone_id) {

                    eventService.shippingMethodUpdated$.next(selectedShippingMethod);

                    resolve(true);
                  }

                });

              }
            });

          }

        }

        else if (selectedShippingMethod && selectedShippingMethod.order_mode == 2) {

          storeService.getBusinessLocaiton().then(restaurantBranches => {

            let isLocationSelectedExist = false;

            restaurantBranches.forEach(branch => {
              if (branch.business_location_id == selectedShippingMethod.business_location_id) {
                isLocationSelectedExist = true;

                eventService.shippingMethodUpdated$.next(selectedShippingMethod);

                resolve(true);
              }
            });

            if (!isLocationSelectedExist) {

              Storage.remove({ key: 'shipping_methodV.0' });

              eventService.shippingMethodUpdated$.next(null);

              resolve(false);
            }
          })
        } else {
          resolve(false);
        }
      });

    });
  }


*/
