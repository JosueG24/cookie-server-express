import { RequestHandler } from "express";

const getCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie1","value", {
        httpOnly:true,
        signed:false, 
        secure:false, 
        sameSite:false, 
        path:"/"
    })
    return res.send("probando123")
}

export default getCookie;