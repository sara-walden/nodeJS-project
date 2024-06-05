import { Request, Response } from 'express';
import HelpRequest from '../Models/helpRequest';

export const getHelpRequests = async (req: Request, res: Response) => {
  const { location, status, priority } = req.query;
  const filter: any = {};
  if (location) filter.location = location;
  if (status) filter.status = status;
  if (priority) filter.priority = priority;

  try {
    const helpRequests = await HelpRequest.find(filter);
    res.status(200).json(helpRequests);
  } catch (error) {
    res.status(404).json({ message: 'Help requests not found' });
  }
};

export const getHelpRequestById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const helpRequest = await HelpRequest.findById(id);
    if (!helpRequest) return res.status(404).json({ message: 'Help request not found' });
    res.status(200).json(helpRequest);
  } catch (error) {
    res.status(404).json({ message: 'Help request not found' });
  }
};

export const createHelpRequest = async (req: Request, res: Response) => {
  const { title, description, location, priority } = req.body;

  try {
    const newHelpRequest = new HelpRequest({ title, description, location, priority });
    await newHelpRequest.save();
    res.status(201).json(newHelpRequest);
  } catch (error) {
    res.status(400).json({ message: 'Invalid request parameters' });
  }
};

export const volunteerForRequest = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { volunteerId } = req.body;

  try {
    const helpRequest = await HelpRequest.findByIdAndUpdate(
      id,
      { status: 'in progress', volunteerId },
      { new: true }
    );
    if (!helpRequest) return res.status(404).json({ message: 'Help request not found' });
    res.status(200).json(helpRequest);
  } catch (error) {
    res.status(400).json({ message: 'Invalid request parameters' });
  }
};

export const closeHelpRequest = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const helpRequest = await HelpRequest.findByIdAndUpdate(
      id,
      { status: 'closed' },
      { new: true }
    );
    if (!helpRequest) return res.status(404).json({ message: 'Help request not found' });
    res.status(200).json(helpRequest);
    // Send notification email
  } catch (error) {
    res.status(400).json({ message: 'Request is already closed or invalid request parameters' });
  }
};
