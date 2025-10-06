import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Register
export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ error: "User already exists" });

    const user = await User.create({ name, email, password, role });
    res.status(201).json({ user, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({ user, token: generateToken(user._id) });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


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