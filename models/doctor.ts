import mongoose from "mongoose";

export interface Idoctor {
    _id?: mongoose.Types.ObjectId;
    name: string;
    city: string;
    state: string;
    specialization: string;
    experience: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const doctorSchema = new mongoose.Schema<Idoctor>(
    {
        name: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        specialization: { type: String, required: true },
        experience: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const DoctorModel = mongoose.models?.Doctor || mongoose.model<Idoctor>("Doctor", doctorSchema);

export default DoctorModel;
