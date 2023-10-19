import NextAuth, { getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const USERS = [
  {
    id: "1",
    name: "admin",
    email: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASS,
    
  }
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name:"credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email Address" },
        password: { label: "Password", type: "Password" },
      },
      async authorize(credentials) {
        const user = USERS.find((x) => x.email === credentials.email && x.password === credentials.password);
        if (!user) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    session({ session }) {
      if (session?.user) {
        return session;
      }
    },
    pages: {
      signIn: "/admin/login",
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export const getAuthSession=()=>getServerSession(authOptions)
export { handler as GET, handler as POST };
