import express from 'express';
import connectDB from './Utils/db';
import helpRequestRoutes from './Routs/helpRequestsRouter';
import volunteerRoutes from './Routs/volunteersRouter';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(helpRequestRoutes);
app.use(volunteerRoutes);

// Database connection
connectDB();

export default app;
