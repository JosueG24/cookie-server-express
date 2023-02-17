import { RequestHandler } from "express";

const postCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie2","value", {
        httpOnly:true,
        secure: true,
        sameSite:"lax"
    })
    return res.send("probando123")
}

export default postCookie;