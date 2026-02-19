import './globals.css';
import { Inter } from 'next/font/google';
import {ScrollToTop} from './components/ScrollToTop';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Invest In Penny | TRNR Penny Stock Risk & Scam Analysis',
  description:
    'Invest In Penny and TRNR provides risk analysis, sentiment insights, and scam detection for penny stocks,  helping investors evaluate TRNR and other high-risk stocks before trading.',
  keywords: [
    'TRNR',
    'TRNR penny stock',
    'penny stocks',
    'penny stock risk analysis',
    'sentiment data',
    'scam detection',
    'TRNR investment alerts',
    'stock fraud prevention',
    'investor insights',
  ],
  icons: {
    icon: '/assets/favicon.png',
  },
};
export const viewport = {
  themeColor: '#3b82f6',
};
export default function RootLayout({ children }) {


  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>
          {children}
          <ScrollToTop />
      </body>
    </html>
  );
}
