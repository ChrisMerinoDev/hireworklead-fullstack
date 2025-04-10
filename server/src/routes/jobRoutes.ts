import { Router } from "express";
import { createJob, getJobs, deleteJob } from "../controllers/job.controller";
import { protect } from "../middleware/authMiddleware";

const router = Router();

// POST /api/jobs
router.post("/", protect, createJob)
router.get("/", protect, getJobs)
router.delete("/:id", protect, deleteJob)

export default router;