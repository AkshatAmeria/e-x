import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider } from "@clerk/nextjs";
import { LampContainer } from "@/components/ui/lamp";
import { Toaster } from "sonner";



export const metadata: Metadata = {
  title: "e^x",
  description: "360degree wealth management",
  icons:"/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      {/* header */}
       <Header/>
      <main className="min-h-screen flex flex-col">
        {children}
      </main>

      <Toaster richColors/>
      
      {/* footer */}
      <footer className="py-4">
       
        <div className="container mx-auto px-4 text-center text-white/50">
          <p>Made with ❤️ by e^x</p>
          <h5 className="text-center mt-8">Say no to financial breakup—because unlike your ex, your savings actually deserve a second chance!</h5>
        </div>
       
      </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
