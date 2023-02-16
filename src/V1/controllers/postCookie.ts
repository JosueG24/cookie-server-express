import { RequestHandler } from "express";

const postCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie2","value", {
        httpOnly:true,
        signed:false,
        secure:false, 
        sameSite:false, 
        path:"/"
    })
    return res.send("probando123")
}

export default postCookie;