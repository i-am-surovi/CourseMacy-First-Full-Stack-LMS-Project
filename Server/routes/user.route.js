import express from "express"
import { login, logout, register, updateProfile } from "../controllers/user.controller.js"
import { singleUpload } from "../middleware/multer.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"

const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile/update").put(isAuthenticated, singleUpload, updateProfile)

export default router;