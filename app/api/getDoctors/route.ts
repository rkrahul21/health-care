import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import DoctorModel from "@/models/doctor";

export async function GET(request: NextRequest) {
    console.log("Request received to fetch doctors", request.body);
  try {
    await connectToDatabase();

    // Extract search parameter from the request URL
    const { search } = Object.fromEntries(request.nextUrl.searchParams);
    console.log("Search parameter:", search);

    const query: Record<string, unknown> = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } }, 
        { state: { $regex: search, $options: "i" } }, 
        { specialization: { $regex: search, $options: "i" } }, 
      ];
    }


    const doctors = await DoctorModel.find(query).sort({ createdAt: -1 });
    console.log("Doctors fetched successfully:", doctors);

    return NextResponse.json(doctors, { status: 200 });
  } catch (error) {
    console.log("Error fetching doctors:", error);
    return NextResponse.json({ message: "Error fetching doctors" }, { status: 500 });
  }
}