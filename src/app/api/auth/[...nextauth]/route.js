import { connectMongodb } from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account?.provider === 'google') {
        const { email, name } = user;
        try {
          await connectMongodb();
          let existingUser = await User.findOne({ email });
          if (!existingUser) {
            // If the user doesn't exist, create a new user in the database
            existingUser = new User({
              email,
              name,
            });
            await existingUser.save();
          }
          // Continue with the sign-in process or return user data as needed
          return Promise.resolve(true);
        } catch (error) {
          console.error('Error while creating or signing in the user:', error);
          return Promise.resolve(false);
        }
      }
    },
  },
});

export { handler as GET, handler as POST };
