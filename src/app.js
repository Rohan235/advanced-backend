import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credentials: true


}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended:true, limit: '16kb'})) 
app.use(express.static("public"))
// parse url encoded data with the query string parser

app.use(cookieParser())
export {app}