
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: '7d' });
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    const token = generateToken(user._id.toString());

    res.status(201).json({ user: { id: user._id, name, email }, token });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id.toString());
    res.json({ user: { id: user._id, name: user.name, email }, token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err });
  }
};

export const getMe = async (req: Request, res: Response) => {
  const userId = (req as any).userId
  try {
    const user = await User.findById(userId).select("-password")
    if (!user) return res.status(404).json({ message: "User not found" })

    res.json(user)
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user", error: error })
  }
}
