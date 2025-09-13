import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Protected() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/api/auth/signin');
  return (
    <main>
      <h1>Protected</h1>
      <div className="card">
        <p>Welcome, {session.user?.email}</p>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </main>
  );
}
