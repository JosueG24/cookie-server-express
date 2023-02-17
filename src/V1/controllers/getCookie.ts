import { RequestHandler } from "express";

const getCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie1","value", {
        httpOnly:true,
        secure: true, 
        sameSite:"none",
    })
    return res.send("probando123")
}

export default getCookie;