'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollText, Search } from 'lucide-react';
import Image from 'next/image';

const initialAnnouncements = [
  { id: 1, title: 'Mid-term Exam Schedule Released', content: 'The schedule for the upcoming mid-term examinations has been published. Please check the student portal.', date: '2024-07-15', tags: ['exams', 'academic'] },
  { id: 2, title: 'Library Books Return Deadline', content: 'All borrowed library books must be returned by July 30th to avoid fines.', date: '2024-07-10', tags: ['library', 'important'] },
  { id: 3, title: 'Guest Lecture on Quantum Computing', content: 'A special guest lecture will be held on August 5th. All students are encouraged to attend.', date: '2024-07-05', tags: ['event', 'technical'] },
  { id: 4, title: 'Sports Meet Registrations Open', content: 'Registrations for the annual sports meet are now open. Last date to register is July 25th.', date: '2024-07-01', tags: ['sports', 'event'] },
];

const popularTags = ['exams', 'event', 'library', 'important', 'academic'];

export default function NoticeBoardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  const filteredAnnouncements = announcements.filter(announcement =>
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleTagClick = (tag: string) => {
    setSearchTerm(tag);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center"><ScrollText className="mr-2 h-6 w-6 text-primary" /> Digital Notice Board</CardTitle>
          <CardDescription>Find the latest announcements and updates.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by keywords or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="text-sm font-medium mr-2">Popular Tags:</span>
            {popularTags.map(tag => (
              <Badge
                key={tag}
                variant={searchTerm.toLowerCase() === tag.toLowerCase() ? "default" : "secondary"}
                onClick={() => handleTagClick(tag)}
                className="cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {filteredAnnouncements.length > 0 ? (
            <div className="space-y-4">
              {filteredAnnouncements.map(announcement => (
                <Card key={announcement.id} className="bg-card hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <CardDescription className="text-xs">{announcement.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{announcement.content}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {announcement.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <Image src="https://placehold.co/300x200.png" alt="No announcements" width={300} height={200} className="mx-auto mb-4 rounded-md" data-ai-hint="empty notice board" />
              <p className="text-xl font-semibold text-muted-foreground">No announcements found.</p>
              <p className="text-sm text-muted-foreground">Try a different search term or check back later.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
