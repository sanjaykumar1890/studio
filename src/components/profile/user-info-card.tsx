import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { UserCircle } from 'lucide-react';

export function UserInfoCard() {
  const student = {
    name: 'Marepally Sanjay Kumar',
    rollNo: '23AG1A6736',
    photoUrl: 'https://placehold.co/120x120.png',
    program: 'B.Tech Computer Science (DataScience)',
    semester: '4th Semester',
  };

  return (
    <Card className="shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-accent p-6 flex flex-col items-center text-center space-y-3">
        <Image
          src={student.photoUrl}
          alt={student.name}
          width={100}
          height={100}
          className="rounded-full border-4 border-background shadow-md"
          data-ai-hint="student portrait"
        />
        <div>
          <h2 className="text-2xl font-bold text-primary-foreground font-headline">{student.name}</h2>
          <p className="text-sm text-primary-foreground/90">Roll No: {student.rollNo}</p>
        </div>
      </div>
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
            <p className="text-muted-foreground">Program</p>
            <p className="font-medium">{student.program}</p>
        </div>
         <div>
            <p className="text-muted-foreground">Current Semester</p>
            <p className="font-medium">{student.semester}</p>
        </div>
      </CardContent>
    </Card>
  );
}
