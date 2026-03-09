import express from "express";
import path from "path";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.json());

let data = "Initial data";

app.get("/health", (_, res) => {
    res.json({
        success: true,
        message: "Health is ok",
    });
});

app.get("/getData", (_, res) => {
    res.json({
        success: true,
        data,
        message: "Data fetched successfully",

    });
});

app.post("/updateData", (req, res) => {
    let newData = req.body?.data;
    data = newData;

    res.json({
        success: true,
        data,
        message: "data Updated successfully",
    });
});

app.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT);
});
