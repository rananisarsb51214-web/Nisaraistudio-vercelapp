import "./globals.css";
import { AuthProvider } from "@/components/auth-provider";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(geist.variable)}>
      <body className="bg-black text-white min-h-screen font-sans">
        <AuthProvider>
          <Header />

          <div className="flex">
            <Sidebar />

            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}import AgentPanel from "@/components/agent-panel";
import MetricsCards from "@/components/metrics-cards";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        AI Control Dashboard
      </h1>

      <MetricsCards />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AgentPanel title="Planner Agent" status="active" />
        <AgentPanel title="Executor Agent" status="running" />
        <AgentPanel title="Analyzer Agent" status="idle" />
        <AgentPanel title="Optimizer Agent" status="learning" />
      </div>
    </div>
  );
}export default function AgentPanel({
  title,
  status
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-4 bg-zinc-950">
      <h2 className="font-semibold">{title}</h2>

      <p className="text-sm text-gray-400 mt-2">
        Status: <span className="text-green-400">{status}</span>
      </p>

      <button className="mt-4 px-3 py-1 bg-white text-black rounded-lg text-sm">
        Trigger
      </button>
    </div>
  );
}export default function MetricsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card label="Active Agents" value="24" />
      <Card label="Tasks Processed" value="12,430" />
      <Card label="Revenue" value="$1,240" />
      <Card label="System Load" value="32%" />
    </div>
  );
}

function Card({ label, value }: any) {
  return (
    <div className="bg-zinc-950 border border-gray-800 p-4 rounded-xl">
      <p className="text-sm text-gray-400">{label}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  );
}"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const user = true; // replace with Firebase auth state

  useEffect(() => {
    if (!user) router.push("/auth");
  }, [user]);

  return <>{children}</>;
}