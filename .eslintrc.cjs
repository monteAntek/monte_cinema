/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    semi: "always",
    "prettier/prettier": "error",
  },
};
