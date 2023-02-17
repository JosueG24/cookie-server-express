import { RequestHandler } from "express";

const postCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie2","value", {
        maxAge: 1000*60*60*24,
        httpOnly:false,
        secure: true,
        sameSite:"none",
        domain: ".netlify.app"
    })
    return res.send("probando123")
}

export default postCookie;