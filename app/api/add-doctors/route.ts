
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import DoctorModel from "@/models/doctor";

export async function POST(request: NextRequest) {
    console.log("Request received to add a doctor",request.body );
  try {
    const { name, city, state, specialization, experience } = await request.json();

    await connectToDatabase();

    const newDoctor = new DoctorModel({
      name,
      city,
      state,
      specialization,
      experience,
    });

    const savedDoctor = await newDoctor.save();
    console.log("Doctor added successfully:", savedDoctor);

    return NextResponse.json({message:"Doctor Addes Sucessfully"},{status:201});
  } catch (error) {
    console.log("Error adding doctor:", error);
    return NextResponse.json({message:"Error adding doctor"},{status:500});
  }
}