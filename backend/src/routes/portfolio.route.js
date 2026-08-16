import { Router } from "express";
import profileData from "../db/profile.db.js";

const router = Router();

router.get("/profile", (req, res) => {
    res.status(200).json(profileData);
});

export default router;