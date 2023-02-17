import { RequestHandler } from "express";

const getCookie : RequestHandler =(req, res, next)=>{
    let domain;
    const origin = req.headers.origin as string;
    if(origin == "https://cookiessitelll.netlify.app"){
            domain = ".cookiessitelll.netlify.app"
        }else{
            domain = "localhost"
        }
    res.cookie("cookie2","value", {
        domain: domain,
        path:"/",
        maxAge: 1000*60*60*24,
        httpOnly:true,
        secure: true, 
        sameSite:"none",

    })
    return res.send("probando Get")
}

export default getCookie;