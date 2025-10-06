import Assignment from "../models/Assignment.js";

// Teacher posts assignment
export const createAssignment = async (req, res) => {
  try {
    const { title, description, subject, deadline } = req.body;
    const assignment = await Assignment.create({
      title,
      description,
      subject,
      deadline,
      teacherId: req.user._id
    });
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all assignments
export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate("teacherId", "name email");
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
