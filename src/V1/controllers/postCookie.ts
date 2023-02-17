import { RequestHandler } from "express";

const postCookie : RequestHandler =(req, res, next)=>{
    console.log(req.headers.origin)
    res.cookie("cookie1","value", {
        domain: ".netlify.app",
        path:"/",
        maxAge: 1000*60*60*24,
        httpOnly:true,
        secure: true,
        sameSite:"none",

    })
    return res.send("probando Post")
}

export default postCookie;