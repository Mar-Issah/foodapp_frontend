import { connectMongodb } from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth, { getServerSession } from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callback: {
        async signIn({ user, account }) {
            console.log(user)
            if (account.provider == "google") {
                const { email, name } = user;
                try {
                    await connectMongodb();
                    const userExists = await User.findOne({ email });
                    if (!userExists) {
                        // const userisAdmin = await
                        const res = await fetch(process.env.APP_URL + "/api/auth/user", {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: {
                                email,
                                name
                            }
                        })
                    }
                    return user
                } catch (error) {
                    console.log("Error while createing account")
                }

            }
        },
        async jwt({ token }) {
            const user = User.find({ email: token.email });
            token.isAdmin = user?.isAdmin
            return token
        },
        async session({token, session}){
            if (token){
                session.user.isAdmin = token.isAdmin
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions)
 
export { handler as GET, handler as POST }

export const getAuthSession = () => getServerSession(authOptions)