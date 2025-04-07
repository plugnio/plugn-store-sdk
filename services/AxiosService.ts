import axios, { AxiosRequestConfig } from 'axios';

//https://axios-http.com/docs/req_config

/*if(store.state['store'] && store.state['store'].is_sandbox) {
    axios.defaults.baseURL = "https://api.dev.plugn.io/v2";
} else {
    axios.defaults.baseURL = process.env.VUE_APP_ENDPOINT;
}*/

export const createAxiosInstance = (config: AxiosRequestConfig) => {
    axios.defaults.baseURL = config.baseURL;

    axios.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded'; 
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    // Add a request interceptor
    axios.interceptors.request.use((config) => {  
 
        if(config.headers['Token'])
            config.headers['Authorization'] = 'Bearer ' + config.headers['Token'];

        config.headers['Store-Id'] = config.headers['Store-Id'];

        config.headers['Language'] = config.headers['Language'];
        config.headers['Currency'] = config.headers['Currency'];

        //config.headers['Mixpanel-Distinct-ID'] = store.state.mixpanel_distinct_id;

        return config;
    });
    
    return axios;
}
 