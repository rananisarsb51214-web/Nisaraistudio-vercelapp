'use client';
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
