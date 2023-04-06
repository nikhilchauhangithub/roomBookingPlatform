import Navbar from '@/app/components/navbar/Navbar';
import './globals.css';
import { Nunito } from 'next/font/google';
export const metadata = {
  title: 'Rishikesh',
  description: 'The way Rishikesh is',
};
const font = Nunito({
  subsets: ['latin'],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
