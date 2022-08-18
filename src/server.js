require("dotenv").config()
import express from "express";
import configViewEngine from "./config/viewEngine"
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser"
import initCronJob from "./config/cronJob"

let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));

configViewEngine(app);

initWebRoutes(app);

initCronJob();

let port = process.env.PORT||3000;

app.listen(port,() => {
    console.log("app is running at the port". port);
})