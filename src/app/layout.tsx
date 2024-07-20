'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { usePathname } from 'next/navigation';
import NavigationBar from '@/widgets/NavigationBar/ui/NavigationBar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      {pathName !== '/intro' && <NavigationBar />}
    </html>
  );
}
