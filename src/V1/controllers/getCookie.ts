import { RequestHandler } from "express";

const getCookie : RequestHandler =(req, res, next)=>{
    console.log(req.headers.origin)
    res.cookie("cookie2","value", {
        domain: ".cookiessitelll.netlify.app",
        path:"/",
        maxAge: 1000*60*60*24,
        httpOnly:true,
        secure: true, 
        sameSite:"none",

    })
    return res.send("probando Get")
}

export default getCookie;