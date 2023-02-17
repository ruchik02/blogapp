import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers : [
        // Google Provider
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    secret:process.env.JWT_SECRET
})