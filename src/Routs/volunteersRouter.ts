import express from 'express';
import { registerVolunteer } from '../Controllers/volunteersController';

const router = express.Router();

router.post('/api/volunteers', registerVolunteer);

export default router;
