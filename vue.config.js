const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/long-term-care-web/',
  transpileDependencies: true,
  devServer: {
    port: 8080,
    host: '127.0.0.1',
    // 允許以 lvh.me 這類指向 127.0.0.1 的公開網域存取，
    // 讓本機開發也能通過 CARTO 的 Referer 網域限制
    allowedHosts: 'all',
  },
});
