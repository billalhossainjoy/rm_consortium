import GoogleProvider from "next-auth/providers/google";
import {NextAuthOptions} from "next-auth";


const authOptions:NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        // !!! Should be stored in .env file.
        GoogleProvider({
            // clientId: process.env.CLIENT_ID!,
            // clientSecret: process.env.CLIENT_SECRET!,
            clientId: `1041339102270-e1fpe2b6v6u1didfndh7jkjmpcashs4f.apps.googleusercontent.com`,
            clientSecret: `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`,
        }),
    ],
    callbacks: {
        async signIn({user}) {
            console.log(user)
            const adminEmail =process.env.ADMIN_EMAIL;

            if (user?.email === adminEmail) {
                return true; // allow login
            }

            return false;
        },

        async redirect({ url, baseUrl}) {
            return `${baseUrl}/admin`;
        }
    },
    pages: {
        error: "/"
    },
    secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
}

export default authOptions;
