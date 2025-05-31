'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { format, addDays, subDays } from 'date-fns';

interface ClassDetail {
  id: string;
  time: string;
  subject: string;
  faculty: string;
  room: string;
}

const mockTimetable: Record<string, ClassDetail[]> = {
  '2024-07-29': [ // Example: A Monday
    { id: 'c1', time: '09:00 AM - 10:00 AM', subject: 'Advanced Calculus', faculty: 'Dr. Emily Carter', room: 'A-101' },
    { id: 'c2', time: '10:00 AM - 11:00 AM', subject: 'Data Structures', faculty: 'Prof. John Smith', room: 'B-203' },
    { id: 'c3', time: '11:15 AM - 12:15 PM', subject: 'Quantum Physics Lab', faculty: 'Dr. Alan Grant', room: 'Lab-3' },
    { id: 'c4', time: '02:00 PM - 03:00 PM', subject: 'Modern Literature', faculty: 'Prof. Sarah Connor', room: 'C-105' },
  ],
  '2024-07-30': [ // Example: A Tuesday
    { id: 'c5', time: '09:00 AM - 10:00 AM', subject: 'Organic Chemistry', faculty: 'Dr. Ian Malcolm', room: 'ChemLab-1' },
    { id: 'c6', time: '10:00 AM - 11:00 AM', subject: 'Advanced Calculus', faculty: 'Dr. Emily Carter', room: 'A-101' },
    { id: 'c7', time: '11:15 AM - 12:15 PM', subject: 'Data Structures Lab', faculty: 'Prof. John Smith', room: 'Lab-2' },
  ],
  // Add more dates as needed
};

export default function TimetablePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateClasses, setSelectedDateClasses] = useState<ClassDetail[]>([]);

  useEffect(() => {
    const dateString = format(currentDate, 'yyyy-MM-dd');
    setSelectedDateClasses(mockTimetable[dateString] || []);
  }, [currentDate]);

  const handlePrevDay = () => {
    setCurrentDate(prev => subDays(prev, 1));
  };

  const handleNextDay = () => {
    setCurrentDate(prev => addDays(prev, 1));
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center"><Calendar className="mr-2 h-6 w-6 text-primary" /> Daily Timetable</CardTitle>
          <CardDescription>View your class schedule.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-6 p-3 border rounded-md bg-secondary">
            <Button variant="outline" size="icon" onClick={handlePrevDay} aria-label="Previous day">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="text-center">
              <p className="text-lg font-semibold text-primary">{format(currentDate, 'EEEE')}</p>
              <p className="text-sm text-muted-foreground">{format(currentDate, 'MMMM d, yyyy')}</p>
            </div>
            <Button variant="outline" size="icon" onClick={handleNextDay} aria-label="Next day">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {selectedDateClasses.length > 0 ? (
            <div className="space-y-4">
              {selectedDateClasses.map((classItem) => (
                <Card key={classItem.id} className="bg-card hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-md text-primary">{classItem.subject}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{classItem.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Faculty: {classItem.faculty}</p>
                    <p className="text-sm text-muted-foreground">Room: {classItem.room}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 border rounded-md bg-card">
              <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-xl font-semibold text-muted-foreground">No classes scheduled for this day.</p>
              <p className="text-sm text-muted-foreground">Enjoy your day off or check another date!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
