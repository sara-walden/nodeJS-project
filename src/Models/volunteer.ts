import mongoose, { Document, Schema } from 'mongoose';

export interface IVolunteer extends Document {
  name: string;
  email: string;
  phone: string;
}

const VolunteerSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

export default mongoose.model<IVolunteer>('Volunteer', VolunteerSchema);
