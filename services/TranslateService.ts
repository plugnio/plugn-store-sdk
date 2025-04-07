//import { useI18n } from "vue-i18n";
//import messages from "../../src/i18n/messages";
//import { createI18n } from "vue-i18n";
import { enUS, ar } from 'date-fns/locale'
import { format } from "date-fns";
import { PlugnStoreConfig } from "../client";

//const i18n = useI18n({ useScope: "global" });
 
export class TranslateService { 

    constructor(private config: PlugnStoreConfig) {
    }

    formatDate(datetime: any, dateFormat: string, isTime = false) {  
       
        if(isTime) {
            datetime = this.getDatetime(datetime);
        }

        //if not Date object, specify that server using +3:00 timezone 
        const value = typeof datetime == 'object' ? datetime: new Date(datetime + "+03:00");

        return format(value, dateFormat, { locale: this.getLocal() })
    }

    getLocal() {
        return this.config.language && this.config.language == 'ar' ? ar : enUS;
    }

    getDatetime(time: any, date: Date | null = null) {

        if(!time) {
            console.info(time, "empty value");
        }

        if(!date)
            date = new Date();

        const arrTime = time.split(":");
        date.setUTCHours(arrTime[0] - 3, arrTime[1], arrTime[2]);
        return new Date(date);
    }

    /*initI18n() { 

        const i18n = createI18n({
            // vue-i18n options here ...
            legacy: false,
            globalInjection: true,
            locale: this.config.language ? this.config.language: 'en', 
            fallbackLocale: 'en',
            messages: messages,
            silentTranslationWarn: true,
            //silentFallbackWarn: true
            missingWarn: false, 
            //fallbackWarn: false,
        });
    
        return i18n;
    }*/

    /**
     * return app direction 
     */
    direction() {
        return this.config.language && this.config.language == 'ar' ? 'rtl' : 'ltr';// i18n.locale.value
    }

    /**
     * Return content based on language selected 
     * @param enContent 
     * @param arContent 
     */
    langContent(enContent: string, arContent: string) {     

        if (this.config.language && this.config.language == 'ar' && arContent)
            return arContent;

        return enContent;
    }
}   