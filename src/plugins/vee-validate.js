import { extend, configure } from "vee-validate";
import { required, min, max, confirmed } from "vee-validate/dist/rules";
import i18n from "./i18n";

configure({
  defaultMessage: (field, values) => {
    // override the field name.
    // values._field_ = i18n.t(`fields.${field}`);

    return i18n.t(`validation.${values._rule_}`, values);
  },
});

// 引入需要使用的验证规则

extend("required", {
  ...required,
  // message: "该字段为必填项"
});

extend("min", {
  ...min,
  // message: "不少于 {length} 位"
});

extend("max", {
  ...max,
  // message: "不大于 {length} 位"
});

extend("confirmed", {
  ...confirmed,
  message: "两次密码输入不一致",
});
