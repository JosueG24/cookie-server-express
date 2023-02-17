import { RequestHandler } from "express";

const getCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie1","value", {
        httpOnly:true,
        secure: true, 
        sameSite:"lax",
    })
    return res.send("probando123")
}

export default getCookie;