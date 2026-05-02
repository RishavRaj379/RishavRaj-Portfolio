import './globals.css';

export const metadata = {
  title: 'Rishav Raj | AI Developer & Full Stack Engineer',
  description:
    'Rishav Raj is an AI developer from India building intelligent systems, robotics, and scalable web applications.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
