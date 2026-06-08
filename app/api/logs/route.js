import connectDB from "@/db/Connectdb";
import Log from "@/models/Log";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// POST:called when user clicks Publish
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json({ error: "Not logged in" }, { status: 401 });
    }

    await connectDB();

    const body = await req.json();

    const log = await Log.create({
      ...body,
      author: {
        name:  session.user.name,
        email: session.user.email,
        image: session.user.image,
      },
    });

    return Response.json({ success: true, log }, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// GET — called when explore page loads
export async function GET() {
  try {
    await connectDB();
    const logs = await Log.find().sort({ createdAt: -1 });
    return Response.json({ success: true, logs }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}




// This file defines two API endpoints for your travel log app — a POST and a GET route.

// POST /api/logs — Save a new log

// Auth check — Uses getServerSession to verify the user is logged in. If not, returns a 401 Unauthorized error.
// Connect to DB — Calls connectDB() to establish a MongoDB connection.
// Read request body — Parses the incoming JSON (your form data — title, description, photos, etc.).
// Save to DB — Creates a new Log document, spreading all the form fields and attaching the logged-in user's name, email, and image as the author.
// Returns the saved log with a 201 Created status.


// GET /api/logs — Fetch all logs

// Connect to DB — Same connectDB() call.
// Query — Fetches all logs from MongoDB, sorted by createdAt descending (newest first).
// Returns the full list of logs with a 200 OK status.