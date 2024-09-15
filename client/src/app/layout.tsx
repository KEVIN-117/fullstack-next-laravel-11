import { ReactNode } from "react";
import type { Metadata } from "next";

import { Inter } from 'next/font/google'
import { Providers } from "@/modules/shared/providers/Providers";

import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="es">
      <body className={`${inter.className} dark`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}


export const metadata: Metadata = {
  title: "Next Inventory",
  description: "Gestion de inventarios con Next JS",
};