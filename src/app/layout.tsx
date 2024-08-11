'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { usePathname } from 'next/navigation';
import NavigationBar from '@/widgets/NavigationBar/ui/NavigationBar';
import Script from 'next/script';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {children}
          {pathName !== '/intro' && !pathName?.includes('/booth/') && (
            <NavigationBar />
          )}
        </QueryClientProvider>
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
  );
}
