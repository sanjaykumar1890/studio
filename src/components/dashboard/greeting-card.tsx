'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';

export function GreetingCard() {
  const [greeting, setGreeting] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hour = now.getHours();

      if (hour < 12) {
        setGreeting('Good Morning');
      } else if (hour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
      setCurrentDateTime(format(now, 'EEEE, MMMM d, yyyy'));
    };
    
    updateDateTime();
    // Optional: update every minute if you want live time, but not strictly necessary for date/greeting
    // const timer = setInterval(updateDateTime, 60000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <Link href="/timetable" passHref>
      <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">{greeting}, Student Name!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{currentDateTime || 'Loading date...'}</p>
          <CardDescription className="text-primary-foreground/80 mt-1">Click to view your timetable for today.</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
