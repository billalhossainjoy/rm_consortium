import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      clientId: process.env.CLIENT_ID!,
      clientSecret: process.env.CLIENT_SECRET!,
    }),
  ],
    callbacks: {
      async signIn({user}: {user: any}) {
          console.log(user)
          const adminEmail =process.env.ADMIN_EMAIL;

      if (user?.email === adminEmail) {
        return true; // allow login
      }

      return false;
      },

      async redirect({ _, baseUrl}: {_: any, baseUrl: string}) {
          return `${baseUrl}/admin`;
      }
    },
    pages: {
      error: "/"
    },
  secret: `UItTuD1HcGXIj8ZfHUswhYdNd40Lc325R8VlxQPUoR0=`,
};

export default authOptions;
