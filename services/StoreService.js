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
exports.StoreService = void 0;
var StoreService = /** @class */ (function () {
    function StoreService(axios, config) {
        this.axios = axios;
        this.config = config;
        //this.axios.defaults.headers['Store-Id']
    }
    /**
     * return promise for store detail
     * @returns Promise
     */
    StoreService.prototype.getStoreDetail = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/store/' + this.config.storeId + '?expand=noOfItems,categories,categories.noOfItems,isOpen,reopeningAt,webLinks,country,currency,currencies,'
                            + 'supportPickup,supportDelivery,storeTheme,openingHours';
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get restaurant's branches
     */
    StoreService.prototype.getBusinessLocaiton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/store/locations/' + this.config.storeId + '?expand=country')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get all category's products
     */
    StoreService.prototype.getCategoryProductsBySlug = function (category_slug) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/item/category/' + category_slug + '?restaurant_uuid=' + this.config.storeId)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * Get all category's products
     */
    StoreService.prototype.getCategoryProducts = function (category_id) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axios.get('/item/' + category_id + '?restaurant_uuid=' + this.config.storeId)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * return store items
     * @returns
     */
    StoreService.prototype.getItems = function (page_1) {
        return __awaiter(this, arguments, void 0, function (page, category_id, keyword, category_slug) {
            var url;
            if (category_id === void 0) { category_id = null; }
            if (keyword === void 0) { keyword = null; }
            if (category_slug === void 0) { category_slug = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/item/items?restaurant_uuid=' + this.config.storeId +
                            '&expand=options,itemImage&page=' + page;
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
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * return store items group by category
     * @returns
     */
    StoreService.prototype.getCategoryItems = function () {
        return __awaiter(this, arguments, void 0, function (category_id, keyword, category_slug) {
            var url;
            if (category_id === void 0) { category_id = null; }
            if (keyword === void 0) { keyword = null; }
            if (category_slug === void 0) { category_slug = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/item/category-items?restaurant_uuid=' + this.config.storeId +
                            '&expand=items,items.options,items.itemImage';
                        if (keyword) {
                            url += '&keyword=' + keyword;
                        }
                        if (category_id) {
                            url += '&category_id=' + category_id;
                        }
                        if (category_slug) {
                            url += '&category_slug=' + category_slug;
                        }
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Load Restaurant's menu
     */
    StoreService.prototype.loadRestaurantMenu = function () {
        return __awaiter(this, arguments, void 0, function (withoutItems) {
            var url;
            if (withoutItems === void 0) { withoutItems = true; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/item?restaurant_uuid=' + this.config.storeId +
                            '&expand=';
                        if (withoutItems) {
                            url += '&wihoutItems=1';
                        }
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
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
    StoreService.prototype.loadItemBySlug = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/item/view/' + slug + '?expand=tabbyPromo,itemVariants,itemVariants.itemVariantImages,itemVariants.itemVariantOptions,itemVariants.itemVariantOptions.option,itemVariants.itemVariantOptions.extraOption,options,options.extraOptions,itemImages,itemVideos,itemSchema&restaurant_uuid=' + this.config.storeId;
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    /**
     * load item data from db
     */
    StoreService.prototype.loadItemData = function (item_uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = '/item/detail?expand=tabbyPromo,itemVariants,itemVariants.itemVariantImages,itemVariants.itemVariantOptions,itemVariants.itemVariantOptions.option,itemVariants.itemVariantOptions.extraOption,options,options.extraOptions,itemImages,itemVideos,itemSchema&item_uuid=' + item_uuid + '&restaurant_uuid=' + this.config.storeId;
                        return [4 /*yield*/, this.axios.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    return StoreService;
}());
exports.StoreService = StoreService;
