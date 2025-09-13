import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      issuer: process.env.KEYCLOAK_ISSUER,
      clientId: process.env.KEYCLOAK_CLIENT_ID || '',
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || '',
      wellKnown: `${process.env.KEYCLOAK_ISSUER}/.well-known/openid-configuration`,
      authorization: { params: { scope: 'openid email profile' } },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, account }) {
      if (account) (token as any).access_token = (account as any).access_token;
      return token;
    },
    async session({ session, token }) {
      (session as any).access_token = (token as any).access_token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
