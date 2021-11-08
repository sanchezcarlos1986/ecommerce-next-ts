const path = require("path");
const { withFrameworkConfig } = require("./framework/common/config");

const defaultLocale = "es-US";

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["~"] = path.resolve(__dirname);
    return config;
  },
  framework: {
    name: "shopify",
  },
  i18n: {
    locales: [defaultLocale, "es"],
    defaultLocale: defaultLocale,
  },
});
