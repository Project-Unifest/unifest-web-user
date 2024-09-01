'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { usePathname } from 'next/navigation';
import NavigationBar from '@/widgets/NavigationBar/ui/NavigationBar';
import Script from 'next/script';
import { QueryClient } from '@tanstack/react-query';
import ReactQueryProviders from '@/shared/utils/react-query-provider';
import Head from 'next/head';

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
        <body className={inter.className}>
          <Head>
            <title>Unifest</title>
            <meta
              name='description'
              content='대학 축제 지도를 펼쳐라! 대학교 축제 정보는 이걸로 종결. 유니페스의 웹 페이지입니다.'
            />
          </Head>
          <ReactQueryProviders>
            {children}
            {pathName !== '/' &&
              pathName !== '/intro' &&
              !pathName?.includes('/booth/') && <NavigationBar />}
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
