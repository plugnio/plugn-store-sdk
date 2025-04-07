"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateService = void 0;
//import { useI18n } from "vue-i18n";
//import messages from "../../src/i18n/messages";
//import { createI18n } from "vue-i18n";
var locale_1 = require("date-fns/locale");
var date_fns_1 = require("date-fns");
//const i18n = useI18n({ useScope: "global" });
var TranslateService = /** @class */ (function () {
    function TranslateService(config) {
        this.config = config;
    }
    TranslateService.prototype.formatDate = function (datetime, dateFormat, isTime) {
        if (isTime === void 0) { isTime = false; }
        if (isTime) {
            datetime = this.getDatetime(datetime);
        }
        //if not Date object, specify that server using +3:00 timezone 
        var value = typeof datetime == 'object' ? datetime : new Date(datetime + "+03:00");
        return (0, date_fns_1.format)(value, dateFormat, { locale: this.getLocal() });
    };
    TranslateService.prototype.getLocal = function () {
        return this.config.language && this.config.language == 'ar' ? locale_1.ar : locale_1.enUS;
    };
    TranslateService.prototype.getDatetime = function (time, date) {
        if (date === void 0) { date = null; }
        if (!time) {
            console.info(time, "empty value");
        }
        if (!date)
            date = new Date();
        var arrTime = time.split(":");
        date.setUTCHours(arrTime[0] - 3, arrTime[1], arrTime[2]);
        return new Date(date);
    };
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
    TranslateService.prototype.direction = function () {
        return this.config.language && this.config.language == 'ar' ? 'rtl' : 'ltr'; // i18n.locale.value
    };
    /**
     * Return content based on language selected
     * @param enContent
     * @param arContent
     */
    TranslateService.prototype.langContent = function (enContent, arContent) {
        if (this.config.language && this.config.language == 'ar' && arContent)
            return arContent;
        return enContent;
    };
    return TranslateService;
}());
exports.TranslateService = TranslateService;
