import { withAuth } from 'next-auth/middleware';
  
  export default withAuth({
	  pages: {
		  signIn: '/admin/login',
	  },
  });

export const config = {
    matcher: ["/((?!terms-and-conditions|privacy-policy|api|_next/static|_next/image|favicon.ico).*)"],
  }