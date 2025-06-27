import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

export function AcademicCalendarSummary() {
  return (
    <Link href="/academic-calendar" passHref> {/* Assuming /academic-calendar page will be created */}
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out bg-secondary">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-headline">Academic Calendar</CardTitle>
          <CalendarDays className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">View key dates for the semester: holidays, exams, and more.</p>
          <ul className="mt-2 text-xs space-y-1 list-disc list-inside">
            <li>Semester Start: Feb 1, 2025</li>
            <li>Midterm Exams: April 10-15, 2025</li>
            <li>Semester End: June 12, 2025</li>
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
}
