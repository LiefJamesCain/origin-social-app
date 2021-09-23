const express = require("express");
const app = express();

// NOTE: this is a workaround
global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

dotenv.config();

//database
mongoose.connect(process.env.MONGO_CONNECT, () => {
  console.log("Mongo DB is connected!");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users/", userRoute);
app.use("/api/posts/", postRoute);

// server
app.listen(8800, () => {
  console.log("Express server is running!");
});
