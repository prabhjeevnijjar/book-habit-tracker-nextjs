import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: ['100', '400', '500', '900'] });

export const metadata = {
  title: 'Book Habit Tracker',
  description: 'Track your daily book reading habit with interactive dashboard.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
