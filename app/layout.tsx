import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://caesar-shift-cipher.vercel.app'),
  title: 'Caesar Shift Cipher',
  description:
    'The Caesar Shift Cipher relies on shifting the letters of a message by an agreed number.',
  openGraph: {
    title: 'Caesar Shift Cipher',
    description:
      'The Caesar Shift Cipher relies on shifting the letters of a message by an agreed number.',
    url: 'https://caesar-shift-cipher.vercel.app',
    images: ['/caesar-og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
