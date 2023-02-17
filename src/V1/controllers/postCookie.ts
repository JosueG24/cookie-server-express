import { RequestHandler } from "express";

const postCookie : RequestHandler =(req, res, next)=>{
    res.cookie("cookie2","value", {
        httpOnly:true,
        path:"/",
        signed:false,
        secure: true,
        sameSite:"strict", 

        domain: ".cookie-server.up.railway.app"
    })
    return res.send("probando123")
}

export default postCookie;