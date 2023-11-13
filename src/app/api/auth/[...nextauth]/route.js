import { connectMongodb } from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

//google provider configurations
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      checks: ['none'],
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async signIn(user) {
      await connectMongodb();
      let newUser;
      try {
        const {
          user: { name, email },
          // account: { access_token },
        } = user;
        newUser = await User.findOne({ email });
        if (!newUser) {
          // If the user doesn't exist, create a new user in the database
          const data = {
            email,
            fullname: name,
          };
          newUser = await User.create(data);
        }
        return Promise.resolve(true);
      } catch (error) {
        console.error('Error while creating or signing in the user:', error);
        return Promise.reject(new Error('Something went wrong!'));
      }
    },
    redirect: async (url, baseUrl) => {
      return '/';
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

export const getAuthSession = () => getServerSession(authOptions);
