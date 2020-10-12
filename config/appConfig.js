let appConfig = {};
let nodeMailer = {};

appConfig.port = 5000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
  uri: "mongodb://localhost:27017/todo-list",
};
appConfig.apiVersion = "/api/v1";

nodeMailer.email = "##########";
nodeMailer.password = "##########";

module.exports = {
  port: appConfig.port,
  allowedCorsOrigin: appConfig.allowedCorsOrigin,
  environment: appConfig.env,
  db: appConfig.db,
  apiVersion: appConfig.apiVersion,
  email: nodeMailer.email,
  password: nodeMailer.password,
};
