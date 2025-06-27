'use client';

import Link from 'next/link';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const data = [
  { name: 'Present', value: 120 },
  { name: 'Absent', value: 60 },
  // { name: 'Total Working Days', value: 100 } // This is the sum, not a segment typically
];
const totalWorkingDays = 180;
const daysPresent = 120;
const attendancePercentage = (daysPresent / totalWorkingDays) * 100;


// HSL values from globals.css
const COLORS = {
  present: 'hsl(var(--chart-1))', // Blue
  absent: 'hsl(var(--chart-2))', // Red
};

export function AttendanceOverview() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Attendance Overview</CardTitle>
        <CardDescription>Your current overall attendance.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        <p className="text-4xl font-bold text-primary mb-2">{attendancePercentage.toFixed(1)}%</p>
        <div className="w-full h-52">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.name === 'Present' ? COLORS.present : COLORS.absent} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value} days`, name]}/>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-center text-muted-foreground">
            <p>Working Days: {totalWorkingDays}</p>
            <p>Days Present: {daysPresent}</p>
            <p>Days Absent: {totalWorkingDays - daysPresent}</p>
        </div>
        <Link href="/profile#attendance" passHref className="mt-4">
          <Button variant="link" className="text-primary">
            View Student Analytics
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
