import { NextAuthProvider } from '@/context/NextAuthProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zhongwen Reader',
  description: 'Learn to read Chinese better',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
