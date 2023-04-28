import './globals.css';

export const metadata = {
  title: 'Caesar Shift Cipher',
  description:
    'The Caesar Shift Cipher relies on shifting the letters of a message by an agreed number.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
