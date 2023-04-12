const config = require("./config/config");

const mongoose = require("mongoose");
const app = require("./app");


// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
let server;

mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Connected to DB at");
    server = app.listen(config.port, () => {
      console.log(`Listening to port ${config.port}`);
    });
  })
  .catch((e) => console.log("Failed to connect to DB", e));
