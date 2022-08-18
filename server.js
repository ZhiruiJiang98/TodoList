app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends:true}));

configViewEngine(app);

initWebRoutes(app);

initCronJob();

let port = process.env.PORT||3000;

app.listen(port,() => {
    console.log("app is running at the port". port);
})