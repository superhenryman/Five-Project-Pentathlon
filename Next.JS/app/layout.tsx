// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Confession App | Next.JS</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
