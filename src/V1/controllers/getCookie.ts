import { RequestHandler } from "express";

const getCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie1","value", {
        httpOnly:false,
        secure: true, 
        sameSite:"none",
        domain: "localhost"
    })
    return res.send("probando123")
}

export default getCookie;