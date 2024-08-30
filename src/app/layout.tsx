'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { usePathname } from 'next/navigation';
import NavigationBar from '@/widgets/NavigationBar/ui/NavigationBar';
import Script from 'next/script';
import { QueryClient } from '@tanstack/react-query';
import ReactQueryProviders from '@/shared/utils/react-query-provider';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <>
      <html lang='en'>
        <meta
          http-equiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
        <body className={inter.className}>
          <ReactQueryProviders>
            {children}
            {pathName !== '/intro' && !pathName?.includes('/booth/') && (
              <NavigationBar />
            )}
          </ReactQueryProviders>
        </body>
        <Script
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`}
          strategy='beforeInteractive'
        />
        <Script
          src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`}
          strategy='beforeInteractive'
        />
      </html>
    </>
  );
}
