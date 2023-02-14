import express from "express";
import cookieParser from "cookie-parser"
import indexRouterV1 from "./V1/routes/index.routes";

const port = process.env.PORT || 4000

const app = express();
app.set("port", port);

// midlewares
app.use(express.json());
app.use(cookieParser())
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:5173")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Widht, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    next();
})
// routes
app.use("/api/V1/",indexRouterV1)



export default app;