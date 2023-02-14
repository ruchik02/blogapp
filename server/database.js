const mongoose = require("mongoose");
require('dotenv').config()
const link='mongodb://ruchi:yukti@ac-0idqpfb-shard-00-00.ampcc5c.mongodb.net:27017,ac-0idqpfb-shard-00-01.ampcc5c.mongodb.net:27017,ac-0idqpfb-shard-00-02.ampcc5c.mongodb.net:27017/?ssl=true&replicaSet=atlas-ui5zxg-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.set("strictQuery", "false");
mongoose.connect(link, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB Connected')
}).catch(err => {
    console.log(`MongoDB connection error: ${err}`);
    process.exit();
});