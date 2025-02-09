import type { Metadata } from "next";
import "@/app/globals.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/app/themes/theme";

export const metadata: Metadata = {
  title: "Learnify | Unlock Your Potential, Share Your Knowledge",
  description: "Learnify | Unlock Your Potential, Share Your Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Spline+Sans:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <ThemeProvider theme={theme}>
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
