import express from 'express';
import {
  getHelpRequests,
  getHelpRequestById,
  createHelpRequest,
  volunteerForRequest,
  closeHelpRequest,
} from '../Controllers/helpRequestsController';

const router = express.Router();

router.get('/api/requests', getHelpRequests);
router.get('/api/requests/:id', getHelpRequestById);
router.post('/api/requests', createHelpRequest);
router.post('/api/requests/:id/volunteer', volunteerForRequest);
router.post('/api/requests/:id/close', closeHelpRequest);

export default router;
