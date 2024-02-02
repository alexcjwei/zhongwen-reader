import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1>Hello, {session?.user?.name || 'World'}!</h1>
      <ul>
        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link href='/documents'>Documents</Link>
        </li>
        {session ? (
          <li>
            <Link href='/api/auth/signout'>Sign Out</Link>
          </li>
        ) : (
          <li>
            <Link href='/api/auth/signin'>Sign In</Link>
          </li>
        )}
      </ul>
    </>
  );
}
