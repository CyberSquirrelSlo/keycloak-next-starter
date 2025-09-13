import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Keycloak + NextAuth Starter</h1>
      <div className="card">
        <p>Status: {session ? 'Signed in as ' + session.user?.email : 'Signed out'}</p>
        <div style={{display:'flex', gap:12, marginTop:12}}>
          {!session && <a href="/api/auth/signin">Sign in</a>}
          {session && <a href="/api/auth/signout">Sign out</a>}
          <Link href="/(protected)">Protected page</Link>
        </div>
      </div>
    </main>
  );
}
