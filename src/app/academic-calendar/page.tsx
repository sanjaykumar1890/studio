import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, CalendarCheck, CalendarX, GraduationCap } from 'lucide-react';

interface CalendarEvent {
  id: string;
  name: string;
  startDate: string;
  endDate?: string;
  type: 'semester' | 'holiday' | 'exam' | 'vacation' | 'event';
  icon: React.ElementType;
}

const academicEvents: CalendarEvent[] = [
  { id: 'sem1_start', name: 'Semester 1 Start', startDate: 'Aug 15, 2024', type: 'semester', icon: CalendarDays },
  { id: 'midterm1', name: 'Midterm Exams (Sem 1)', startDate: 'Oct 10, 2024', endDate: 'Oct 15, 2024', type: 'exam', icon: CalendarCheck },
  { id: 'diwali', name: 'Diwali Holidays', startDate: 'Nov 01, 2024', endDate: 'Nov 05, 2024', type: 'holiday', icon: CalendarX },
  { id: 'sem1_end', name: 'Semester 1 End', startDate: 'Dec 20, 2024', type: 'semester', icon: CalendarDays },
  { id: 'winter_vac', name: 'Winter Vacation', startDate: 'Dec 21, 2024', endDate: 'Jan 05, 2025', type: 'vacation', icon: CalendarX },
  { id: 'sem2_start', name: 'Semester 2 Start', startDate: 'Jan 10, 2025', type: 'semester', icon: CalendarDays },
  { id: 'techfest', name: 'Annual Tech Fest', startDate: 'Feb 20, 2025', endDate: 'Feb 22, 2025', type: 'event', icon: GraduationCap },
  { id: 'midterm2', name: 'Midterm Exams (Sem 2)', startDate: 'Mar 15, 2025', endDate: 'Mar 20, 2025', type: 'exam', icon: CalendarCheck },
  { id: 'summer_vac', name: 'Summer Vacation', startDate: 'May 20, 2025', endDate: 'Jul 15, 2025', type: 'vacation', icon: CalendarX },
];

const getIconColor = (type: CalendarEvent['type']) => {
  switch (type) {
    case 'exam': return 'text-destructive';
    case 'holiday': return 'text-accent';
    case 'vacation': return 'text-yellow-500';
    case 'event': return 'text-purple-500';
    default: return 'text-primary';
  }
};

export default function AcademicCalendarPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center">
            <CalendarDays className="mr-2 h-6 w-6 text-primary" /> Academic Calendar
          </CardTitle>
          <CardDescription>Full semester academic calendar including key dates and events.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {academicEvents.map((event) => (
              <Card key={event.id} className="bg-card hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center space-x-3">
                  <event.icon className={`h-8 w-8 flex-shrink-0 ${getIconColor(event.type)}`} />
                  <div>
                    <h3 className="font-semibold text-md">{event.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {event.startDate}
                      {event.endDate && ` - ${event.endDate}`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
