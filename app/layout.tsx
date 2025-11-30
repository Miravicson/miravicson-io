import userData from "@/lib/data/data";
import { ibm } from "@/public/fonts/fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://miravicson.com"),
  title: userData.SEO.summary.title,
  description: userData.SEO.summary.description,
  keywords: ['Victor Chiagozie Ughonu', 'Miravicson', 'Intel Student Ambassador, Nigeria', 'Full-stack Software Engineer', 'CTO Bloomers.ng']

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibm.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
