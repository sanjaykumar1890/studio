import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const events = [
  { id: 1, title: 'Annual Tech Fest "Innovate 2024"', description: 'Join us for a week of coding challenges, workshops, and guest lectures.', countdown: 'in 2 days', type: 'Hackathon' },
  { id: 2, title: 'Cultural Night "Spectrum"', description: 'Experience a vibrant evening of music, dance, and drama performances.', countdown: 'in 9 days', type: 'Cultural' },
  { id: 3, title: 'Guest Lecture on AI Ethics', description: 'By Dr. Jane Doe, a leading expert in Artificial Intelligence.', countdown: 'in 15 days', type: 'Technical' },
  { id: 4, title: 'Semester Break Announcement', description: 'The upcoming semester break will start from next month.', countdown: 'in 25 days', type: 'Announcement' },
];

export function UpcomingEvents() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Upcoming Campus Events</CardTitle>
        <CardDescription>Stay updated with the latest happenings.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full pr-4">
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="p-4 border rounded-lg bg-card hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-md mb-1">{event.title}</h3>
                  <Badge variant={event.type === 'Hackathon' ? 'default' : event.type === 'Cultural' ? 'secondary' : 'outline' } className="ml-2 whitespace-nowrap">{event.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-accent font-medium">{event.countdown}</p>
                  <Button size="sm" variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
