// https://kazupon.github.io/vue-i18n/zh/introduction.html
import Vue from "vue";
import VueI18n from "vue-i18n";
import zh_CN from "vee-validate/dist/locale/zh_CN.json";
import en from "vee-validate/dist/locale/en.json";

Vue.use(VueI18n);

const messages = {
  en: {
    $vuetify: {
      message: require("@/language/en"),
      dataIterator: {
        rowsPerPageText: "Items per page:",
        pageText: "{0}-{1} of {2}",
      },
    },
    validation: en.messages,
  },
  sv: {
    $vuetify: {
      dataIterator: {
        rowsPerPageText: "Element per sida:",
        pageText: "{0}-{1} av {2}",
      },
    },
  },
  zh: {
    $vuetify: {
      message: require("@/language/zh"),
    },
    validation: zh_CN.messages,
  },
};

// 默认语言 en, 项目使用 sessionStorage 做语言记录
let i18nLocale = "zh";
if (sessionStorage.getItem("i18nLocale")) {
  i18nLocale = sessionStorage.getItem("i18nLocale");
}

// 使用选项创建 VueI18n 实例
export default new VueI18n({
  locale: i18nLocale, // set locale
  messages, // set locale messages
});

// export default i18n;
