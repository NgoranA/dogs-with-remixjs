/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  // devServerPort: 8002,
  // WARN : obsolete
  // future: {
  //   v2_dev: true,
  // },
  dev: {
    port: 8002,
  },
};
