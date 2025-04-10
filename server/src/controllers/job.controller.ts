import { Request, Response } from "express";
import Job from "../models/Job";

export const createJob = async (req: Request, res: Response) => {
    const { title, company, description } = req.body
    const userId = (req as any).userId

    try {
        const job = await Job.create({
            title,
            company,
            description,
            createdBy: userId,
        })

        res.status(201).json(job)

    } catch (error) {
        console.error("Create Job Error", error)
        res.status(500).json({ message: "Failed to create job", error: error })
    };
};

export const getJobs = async (req: Request, res: Response) => {
    const userId = (req as any). userId

    try {
        const jobs = await Job.find({ createdBy: userId }).sort({ createdAt: -1 })
        res.json(jobs)

    } catch (error) {
        console.error("Fetch jobs error:", error)
        res.status(500).json({ message: "Failed to fetch jbos" })
    }
};

export const deleteJob = async (req: Request, res: Response) => {
    const userId = (req as any).userId
    const { id } = req.params

    try {
        const job = await Job.findOne({ _id: id, createdBy: userId })

        if (!job) {
            return res.status(404).json({ message: "Job not found or unauthorized" })
        }

        await job.deleteOne();
        res.json({ message: "Job deleted successfully" })

    } catch (error) {
        console.error("Job deletion error", error)
        res.status(500).json({ message: "Failed to delete job" })
    }
};