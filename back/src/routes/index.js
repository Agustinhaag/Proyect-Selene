import { Router } from "express";
import { createPolls, getPolls, registerVote } from "../controllers/index.js";

const router = Router()

router.post("/polls", createPolls)
router.get("/polls/:id",getPolls)
router.post("/polls/:id/vote", registerVote)

export default router