"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryZoneService = void 0;
var DeliveryZoneService = /** @class */ (function () {
    function DeliveryZoneService(axios, config) {
        this.axios = axios;
        this.config = config;
    }
    DeliveryZoneService.prototype.getCountriesAvailableForDelivery = function () {
        return __awaiter(this, arguments, void 0, function (keyword, onlyCountries) {
            var url, response;
            if (keyword === void 0) { keyword = ''; }
            if (onlyCountries === void 0) { onlyCountries = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/delivery-zone/list-of-countries/' + this.config.storeId + '?expand=areaDeliveryZone';
                        if (keyword)
                            url += '&keyword=' + keyword;
                        if (onlyCountries) {
                            url += '&onlyCountries=true';
                        }
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    DeliveryZoneService.prototype.getCountries = function () {
        return __awaiter(this, arguments, void 0, function (keyword) {
            var response;
            if (keyword === void 0) { keyword = ''; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/countries?keyword=' + keyword)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    DeliveryZoneService.prototype.getAreas = function (city_id_1) {
        return __awaiter(this, arguments, void 0, function (city_id, keyword, page) {
            var response;
            if (keyword === void 0) { keyword = ''; }
            if (page === void 0) { page = 1; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/city-areas/' + city_id + '?keyword=' + keyword + '&page=' + page)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    DeliveryZoneService.prototype.getCountryCities = function (country_id_1) {
        return __awaiter(this, arguments, void 0, function (country_id, keyword, page) {
            var response;
            if (keyword === void 0) { keyword = ''; }
            if (page === void 0) { page = 1; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/country-cities/' + country_id + '?keyword=' + keyword + '&page=' + page)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    DeliveryZoneService.prototype.getStateCities = function (state_id_1) {
        return __awaiter(this, arguments, void 0, function (state_id, keyword, page) {
            var response;
            if (keyword === void 0) { keyword = ''; }
            if (page === void 0) { page = 1; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/state-cities/' + state_id + '?keyword=' + keyword + '&page=' + page)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    DeliveryZoneService.prototype.getCountryStates = function (country_id_1) {
        return __awaiter(this, arguments, void 0, function (country_id, keyword) {
            var response;
            if (keyword === void 0) { keyword = ''; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/country-states/' + country_id + '?keyword=' + keyword)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get PickupLocations
     */
    DeliveryZoneService.prototype.getPickupLocations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/list-pickup-locations/' + this.config.storeId)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
    * Get listOfCountriesAvailableForDelivery
    */
    DeliveryZoneService.prototype.getDeliveryAreaList = function (countryId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/list-of-areas/' + this.config.storeId + '/' + countryId)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get states
     */
    DeliveryZoneService.prototype.getStates = function (country_id_1) {
        return __awaiter(this, arguments, void 0, function (country_id, keyword) {
            var response;
            if (keyword === void 0) { keyword = ''; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/states/' + country_id + '?expand=areaDeliveryZone&keyword=' + keyword)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Get cities
     */
    DeliveryZoneService.prototype.getCities = function (state_id_1) {
        return __awaiter(this, arguments, void 0, function (state_id, keyword) {
            var response;
            if (keyword === void 0) { keyword = ''; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/cities/' + state_id + '?expand=areaDeliveryZone&keyword=' + keyword)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Get restaurant's delivery area data
     */
    DeliveryZoneService.prototype.getDeliveryZone = function (delivery_zone_id_1) {
        return __awaiter(this, arguments, void 0, function (delivery_zone_id, area_id) {
            var url, response;
            if (area_id === void 0) { area_id = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/delivery-zone/' + this.config.storeId + '/' + delivery_zone_id;
                        if (area_id)
                            url = url + '?area_id=' + area_id;
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * get city by lat long
     * @param latitude
     * @param longitude
     * @returns
     */
    DeliveryZoneService.prototype.getCityByLocation = function (latitude, longitude) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/delivery-zone/city-by-location?latitude=' + latitude + '&longitude=' + longitude;
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * return delivery zone for tax + delivery fee details by location provided
     * @param state_id
     * @param city_id
     * @param area_id
     * @returns
     */
    DeliveryZoneService.prototype.getDeliveryZoneByLocation = function (city_id_1) {
        return __awaiter(this, arguments, void 0, function (city_id, area_id, state_id) {
            var url, response;
            if (area_id === void 0) { area_id = null; }
            if (state_id === void 0) { state_id = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/delivery-zone/by-location?expand=area,city,deliveryZone,deliveryZone.businessLocation';
                        if (state_id)
                            url = url + '&state_id=' + state_id;
                        if (city_id)
                            url = url + '&city_id=' + city_id;
                        if (area_id)
                            url = url + '&area_id=' + area_id;
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get restaurant's delivery area data
     */
    DeliveryZoneService.prototype.getPickupLocationData = function (business_location_id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/delivery-zone/pickup-location/' + this.config.storeId + '/' + business_location_id)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     *  load Schedule DateData
     */
    DeliveryZoneService.prototype.getScheduleData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items, _i, _a, i, param, url, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        items = [];
                        for (_i = 0, _a = Object.keys(this.config.cart); _i < _a.length; _i++) {
                            i = _a[_i];
                            items.push({
                                'prep_time_in_min': this.config.cart[i].prep_time_in_min
                            });
                        }
                        param = {
                            'cart': items
                        };
                        url = '/delivery-zone/get-delivery-time?delivery_zone_id='
                            + this.config.shippingMethod.delivery_zone_id;
                        return [4 /*yield*/, this.axios.post(url, param)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    return DeliveryZoneService;
}());
exports.DeliveryZoneService = DeliveryZoneService;
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
