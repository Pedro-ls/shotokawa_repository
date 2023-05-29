import '../styles/globals.css'
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className='bg-d-black-85'>{children}</body>
    </html>
  );
}