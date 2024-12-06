import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication System",
  description: "An authentication system built with next-auth-v5",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`flex flex-col min-h-screen items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 ${inter.className}`}
        >
          <Toaster />
          <div className="flex-grow w-full">{children}</div>
          <p className="text-white text-center text-sm py-4">
            Built from ♥️ by Salman
          </p>
        </body>
      </html>
    </SessionProvider>
  );
}
