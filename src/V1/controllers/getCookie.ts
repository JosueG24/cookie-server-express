import { RequestHandler } from "express";

const getCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie1","value", {
        httpOnly:true,
        signed:false, 
        secure:true, 
        sameSite:"lax", 
        path:"/", 
        domain:"localhost"
    })
    return res.send("probando123")
}

export default getCookie;