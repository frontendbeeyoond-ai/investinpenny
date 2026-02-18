import './globals.css';
import { Inter } from 'next/font/google';
import {ScrollToTop} from './components/ScrollToTop';
const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
    
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
       
          {children}
            <ScrollToTop />

      </body>
    </html>
  );
}
