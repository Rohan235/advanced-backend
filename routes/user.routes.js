import { Router } from "express";
import { logoutUser, refreshAccessToken, registerUser } from "../controllers/user.controller.js";
import{upload} from "../middlewares/multer.middleware.js"
import{ loginUser} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router =  Router();


router.route("/register").post(
upload.fields([
    {
        name : "avatar",
        maxCount: 1
    },
    {
        name: "coverImage",
        maxCount : 1
    }
]),
    registerUser)


router.route("/login").post(loginUser)

//secure route

router.route("/logout").post( verifyJWT, logoutUser)

router.route("/refresh-token").post(refreshAccessToken )

export default router;

//when default export we can gave any name eg userRouter
//when export in { } can use like (registerUser)