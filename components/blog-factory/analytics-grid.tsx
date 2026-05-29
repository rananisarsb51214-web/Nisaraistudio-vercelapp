import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AnalyticsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader><CardTitle>Total Impressions</CardTitle></CardHeader>
        <CardContent><p className="text-2xl font-bold">120,405</p></CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Avg CTR</CardTitle></CardHeader>
        <CardContent><p className="text-2xl font-bold">3.2%</p></CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Published Blogs</CardTitle></CardHeader>
        <CardContent><p className="text-2xl font-bold">45</p></CardContent>
      </Card>
    </div>
  );
}
