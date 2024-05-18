import '@/assets/globals.css';
import { iranYekan } from '@/assets/fonts';
import Header from '@/components/layout/Header';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className={iranYekan.className}>
      <body className="max-w-screen-xl mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
