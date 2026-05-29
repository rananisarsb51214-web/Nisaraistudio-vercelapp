'use client';
import { useAuth } from '@/components/auth-provider';
import { AnalyticsGrid } from '@/components/blog-factory/analytics-grid';
import { JobList } from '@/components/blog-factory/job-list';

export default function BlogFactoryDashboard() {
  // Mocking auth for now
  const user = { email: 'user@example.com' };
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Factory Dashboard</h1>
      <AnalyticsGrid />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Active Jobs</h2>
        <JobList />
      </div>
    </div>
  );
}
