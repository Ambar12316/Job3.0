const express = require("express");
const app  = express();
const cors = require("cors");
require("dotenv").config();
require("./config/conn");

app.use(
    cors({
      origin: [process.env.FRONTEND_URL || "http://localhost:5173/"],
      credentials: true,
    })
  );

  app.listen(process.env.PORT || 1000, () => {
    console.log(`Server started on port : ${process.env.PORT || 1000}`);
  });