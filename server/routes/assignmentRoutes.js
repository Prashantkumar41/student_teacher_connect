import express from "express";
import { createAssignment, getAssignments } from "../controllers/assignmentController.js";
import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

// Only teacher can create assignments
router.post("/", protect, authorizeRoles("teacher"), createAssignment);

// Students & teachers can view assignments
router.get("/", protect, getAssignments);

export default router;
