import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const USERS = [
  {
    id: "1",
    name: "admin",
    email: "admin@gmail.com",
    password: "admin@123",
    role: "admin",
  },
  {
    id: "2",
    name: "user",
    email: "user@gmail.com",
    password: "user@123",
    role: "user",
  },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email Address" },
        password: { label: "Password", type: "Password" },
      },
      async authorize(credentials) {
        const user = USERS.find((x) => x.email === credentials.email && x.password === credentials.password);
        console.log("User",user);
        if (!user) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
      }
   
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
