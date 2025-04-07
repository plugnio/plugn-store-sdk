"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAxiosInstance = void 0;
var axios_1 = require("axios");
//https://axios-http.com/docs/req_config
/*if(store.state['store'] && store.state['store'].is_sandbox) {
    axios.defaults.baseURL = "https://api.dev.plugn.io/v2";
} else {
    axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT;
}*/
var createAxiosInstance = function (config) {
    axios_1.default.defaults.baseURL = config.baseURL;
    axios_1.default.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded';
    axios_1.default.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // Add a request interceptor
    axios_1.default.interceptors.request.use(function (config) {
        if (config.headers['Token'])
            config.headers['Authorization'] = 'Bearer ' + config.headers['Token'];
        config.headers['Store-Id'] = config.headers['Store-Id'];
        config.headers['Language'] = config.headers['Language'];
        config.headers['Currency'] = config.headers['Currency'];
        //config.headers['Mixpanel-Distinct-ID'] = store.state.mixpanel_distinct_id;
        return config;
    });
    return axios_1.default;
};
exports.createAxiosInstance = createAxiosInstance;
