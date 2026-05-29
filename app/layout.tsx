import type {Metadata} from 'next';
import './globals.css'; 
import { AuthProvider } from '@/components/auth-provider';
import { Header } from '@/components/header';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body suppressHydrationWarning className="min-h-screen bg-black text-white">
        <AuthProvider>
            <Header/>
            {children}
        </AuthProvider>
      </body>
    </html>
  );
}
