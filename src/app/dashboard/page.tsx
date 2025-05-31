import { GreetingCard } from '@/components/dashboard/greeting-card';
import { AttendanceOverview } from '@/components/dashboard/attendance-overview';
import { UpcomingEvents } from '@/components/dashboard/upcoming-events';
import { AcademicCalendarSummary } from '@/components/dashboard/academic-calendar-summary';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <GreetingCard />
      <div className="grid gap-6 md:grid-cols-2">
        <AttendanceOverview />
        <UpcomingEvents />
      </div>
      <AcademicCalendarSummary />
    </div>
  );
}
