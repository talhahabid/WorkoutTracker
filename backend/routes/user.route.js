import express from "express";
import { requireAuth } from "../middleware/requireAuth.js";
import { editProfile } from "../controllers/user.controller.js";

const router = express.Router();
router.use(requireAuth);

router.put("/profile/:_id", editProfile);

export default router;
