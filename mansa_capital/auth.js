import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { CredentialsSignin } from "next-auth"
import { Login } from "@/app/api/controllers/authController"
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name:"credentials",
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const user = await Login(credentials)
                if(!user){
                    throw new CredentialsSignin("Invalid Details")
                }
                return user
            },
        }),
    ],
})
