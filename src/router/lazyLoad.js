// 懒加载组件
module.exports = (file) => () => import("@/views/" + file);
