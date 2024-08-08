'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { usePathname } from 'next/navigation';
import NavigationBar from '@/widgets/NavigationBar/ui/NavigationBar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang='en'>
      <Script
        strategy='beforeInteractive'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
      />
      <Script
        strategy='beforeInteractive'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`}
      />
      <body className={inter.className}>
        {children}
        {pathName !== '/intro' && pathName !== '/booth' && <NavigationBar />}
      </body>
    </html>
  );
}
