import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Keycloak + NextAuth Starter', description:'Secure Next.js (App Router) with Keycloak via NextAuth.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
