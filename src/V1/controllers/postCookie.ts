import { RequestHandler } from "express";

const postCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie2","value", {
        httpOnly:false,
        signed:false,
        secure:false, 
        sameSite:"strict", 
        path:"/"
    })
    return res.send("probando123")
}

export default postCookie;