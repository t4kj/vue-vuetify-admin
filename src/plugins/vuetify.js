import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import i18n from "./i18n";
// import VueI18n from "vue-i18n";

Vue.use(Vuetify);
// Vue.use(VueI18n);

// const messages = {
//   en: {
//     $vuetify: {
//       message: require("@/language/en"),
//       dataIterator: {
//         rowsPerPageText: "Items per page:",
//         pageText: "{0}-{1} of {2}",
//       },
//     },
//   },
//   sv: {
//     $vuetify: {
//       dataIterator: {
//         rowsPerPageText: "Element per sida:",
//         pageText: "{0}-{1} av {2}",
//       },
//     },
//   },
//   zh: {
//     $vuetify: {
//       message: require("@/language/zh"),
//     },
//   },
// };

// 使用选项创建 VueI18n 实例
// const i18n = new VueI18n({
//   locale: "zh", // set locale
//   messages, // set locale messages
// });

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: { dark: JSON.parse(sessionStorage.getItem("theme")) },
});

// const vuetify = new Vuetify({
//   lang: {
//     t: (key, ...params) => i18n.t(key, params),
//   },
// });
//
// export { vuetify, i18n };
