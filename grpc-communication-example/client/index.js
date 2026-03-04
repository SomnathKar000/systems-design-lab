import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 4000;

app.get("/health", (_, res) =>
  res.json({ success: true, message: "Health is ok" })
);

// TODO: Expose rest call with gRPC

app.listen(PORT, () => {
  console.log("App started successfully on port: ", PORT);
});
