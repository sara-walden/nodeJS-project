import mongoose, { Document, Schema } from 'mongoose';

export interface IHelpRequest extends Document {
  title: string;
  description: string;
  location: string;
  status: 'open' | 'in progress' | 'closed';
  priority: 'low' | 'medium' | 'high';
  volunteerId?: string;
}

const HelpRequestSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['open', 'in progress', 'closed'], default: 'open' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  volunteerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' },
});

export default mongoose.model<IHelpRequest>('HelpRequest', HelpRequestSchema);
