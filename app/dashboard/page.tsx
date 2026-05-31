export default function BillingPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Billing</h1>

      <div className="bg-zinc-950 p-6 rounded-xl border border-gray-800">
        <p className="text-gray-400">
          Upgrade to unlock advanced AI agents
        </p>

        <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg">
          Upgrade Now
        </button>
      </div>
    </div>
  );
}'use client';
import { useAuth } from '@/components/auth-provider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { DashboardStats } from '@/components/dashboard-stats';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  if (loading) return <div className="p-20 text-center">Loading...</div>;
  if (!user) return null;

  return (
    <div className="p-20">
      <h1 className="text-4xl font-bold">Workspace Dashboard</h1>
      <p className="mt-4">Welcome back, {user.email}.</p>
      <DashboardStats />
    </div>
  );
}
