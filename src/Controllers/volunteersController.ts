import { Request, Response } from 'express';
import Volunteer from '../Models/volunteer';

export const registerVolunteer = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  try {
    const newVolunteer = new Volunteer({ name, email, phone });
    await newVolunteer.save();
    res.status(201).json(newVolunteer);
  } catch (error) {
    res.status(400).json({ message: 'Invalid request parameters' });
  }
};
