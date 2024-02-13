import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router =  Router();


router.route("/register").post(registerUser)
export default router;

//when default export we can gave any name eg userRouter
//when export in { } can use like (registerUser)