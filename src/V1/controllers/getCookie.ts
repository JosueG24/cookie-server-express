import { RequestHandler } from "express";

const getCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie1","value", {
        httpOnly:true,
        path:"/",
        signed:false, 
        secure: true, 
        sameSite:"strict", 

        domain: "cookie-server.up.railway.app"
    })
    return res.send("probando123")
}

export default getCookie;