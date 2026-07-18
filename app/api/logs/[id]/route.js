import connectDB from "@/db/Connectdb";
import Log from "@/models/Log";

//this api function return individual log by id 

export async function GET(req, { params }) {
    try {
        await connectDB();
        const {id}=await params
        const log = await Log.findById(id)
        if (!log) {
            return Response.json({ error: "Log not found" }, { status: 404})
        }
        else {
            return Response.json({ success: true, log }, { status: 200})
        }

    }
    catch (error) {
        return Response.json({ error: error.message }, { status: 500 })
    }



}