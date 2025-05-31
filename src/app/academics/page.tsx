'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpenText, Users, ShieldCheck, Trophy } from 'lucide-react';

const subjects = [
  { id: 1, name: 'Advanced Calculus', faculty: 'Dr. Emily Carter' },
  { id: 2, name: 'Data Structures & Algorithms', faculty: 'Prof. John Smith' },
  { id: 3, name: 'Quantum Physics', faculty: 'Dr. Alan Grant' },
  { id: 4, name: 'Modern Literature', faculty: 'Prof. Sarah Connor' },
  { id: 5, name: 'Organic Chemistry', faculty: 'Dr. Ian Malcolm' },
];

const otherActivities = [
  { id: 1, name: 'Debate Club', description: 'Sharpen your oratory skills and engage in stimulating discussions.', icon: Users },
  { id: 2, name: 'Cybersecurity Club', description: 'Explore the world of cybersecurity, ethical hacking, and digital defense.', icon: ShieldCheck },
  { id: 3, name: 'Photography Club', description: 'Capture moments, learn techniques, and showcase your creativity.', icon: BookOpenText }, // Placeholder icon
  { id: 4, name: 'Basketball Team', description: 'Join the college basketball team and compete in inter-college tournaments.', icon: Trophy },
];

export default function AcademicsPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center"><BookOpenText className="mr-2 h-6 w-6 text-primary" /> Academics</CardTitle>
          <CardDescription>Explore your subjects, activities, and other academic information.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="subjects" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="others">Others</TabsTrigger>
            </TabsList>
            <TabsContent value="subjects">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Current Semester Subjects</h3>
                {subjects.map(subject => (
                  <Card key={subject.id} className="bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <p className="font-semibold text-md">{subject.name}</p>
                      <p className="text-sm text-muted-foreground">Faculty: {subject.faculty}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="others">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-2">Extracurricular Activities & Clubs</h3>
                {otherActivities.map(activity => (
                  <Card key={activity.id} className="bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-start space-x-3">
                      <activity.icon className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-md">{activity.name}</p>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
