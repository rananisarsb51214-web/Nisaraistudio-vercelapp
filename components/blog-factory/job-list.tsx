'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/components/auth-provider';

export function JobList() {
  const { user } = useAuth();
  const [snapshot, loading, error] = useCollection(
    user ? query(collection(db, 'jobs'), where('tenantId', '==', user.uid)) : null
  );

  const jobs = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() })) || [];

  if (loading) return <div>Loading jobs...</div>;
  if (error) return <div>Error loading jobs: {error.message}</div>;

  return (
    <div className="space-y-4">
      {jobs.map((job: any) => (
        <Card key={job.id}>
          <CardHeader><CardTitle>{job.topic}</CardTitle></CardHeader>
          <CardContent><p>Status: {job.status}</p></CardContent>
        </Card>
      ))}
    </div>
  );
}
