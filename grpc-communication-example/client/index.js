import express from "express";
import bodyParser from "body-parser";
import { client } from "./client.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4000;

app.get("/health", (_, res) =>
  res.json({ success: true, message: "Health is ok" })
);

app.get("/", (req, res) => {
  client.GetAll(null, (err, data) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: "Got an error",
      });
    }
    return res.status(200).json({
      success: true,
      data: data.customers,
    });
  });
});

// TODO: Expose rest call with gRPC

app.listen(PORT, () => {
  console.log("App started successfully on port: ", PORT);
});
