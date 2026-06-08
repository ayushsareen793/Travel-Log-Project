import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/db/Connectdb";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

// Every time you log in, this runs in order:

// Connects to MongoDB (travellog database now)
// Checks if a user with your email already exists
// If not then creates a new user document
// Returns true to allow the login


  callbacks: {
    async signIn({ user, account }) {
      try {
        await connectDB();
        const existing = await User.findOne({ email: user.email });
        if (!existing) {
          await User.create({
            name:     user.name,
            email:    user.email,
            image:    user.image,
            provider: account.provider,
          });
        }
        return true;
      } catch (error) {
        console.error("SignIn error:", error);
        return true;
      }
    },

    async session({ session }) {
      try {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.id = dbUser._id.toString();
        }
        return session;
      } catch (error) {
        return session;
      }
    },
  },

  pages: {
    signIn: "/Login",
  },

  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };