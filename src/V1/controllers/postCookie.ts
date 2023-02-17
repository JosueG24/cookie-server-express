import { RequestHandler } from "express";

const postCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie2","value", {
        httpOnly:false,
        secure: true,
        sameSite:"none",
        domain: "localhost"
    })
    return res.send("probando123")
}

export default postCookie;