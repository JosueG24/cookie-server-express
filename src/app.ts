import express from "express";
import cookieParser from "cookie-parser"
import indexRouterV1 from "./V1/routes/index.routes";
import cors from "cors"

const port = process.env.PORT || 4000

const app = express();
app.set("port", port);

// midlewares
app.use(express.json());
app.use(cookieParser())

app.use((req, res, next)=>{
    const allowedOrigins = ["https://cookiessitelll.netlify.app", "http://localhost:3000"]
    const origin = req.headers.origin as string;
    console.log({origin})
    if(allowedOrigins.includes(origin)){
        res.header("Access-Control-Allow-Origin", origin)
    }
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Widht, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    next();
})
// routes
app.use("/api/V1/",indexRouterV1)



export default app;