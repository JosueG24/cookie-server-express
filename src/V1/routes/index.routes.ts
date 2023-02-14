import { Router } from "express";
import { pingPong } from "../controllers/index.controllers";
import getCookie from "../controllers/getCookie";
import postCookie from "../controllers/postCookie";

const indexRouter = Router();

indexRouter.get("/ping", pingPong)

indexRouter.get("/cookie", getCookie)
indexRouter.post("/cookie", postCookie)

export default indexRouter;