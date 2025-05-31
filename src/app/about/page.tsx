import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <Info className="mx-auto h-12 w-12 text-primary mb-4" />
          <CardTitle className="font-headline text-3xl">About ACE Portal</CardTitle>
          <CardDescription>Your comprehensive student attendance and academic management system.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">Our Mission</h2>
            <p>
              ACE Portal aims to provide a seamless and efficient platform for students and parents to track academic progress, 
              stay informed about campus activities, and manage attendance effectively. We believe in leveraging technology 
              to enhance the educational experience and foster better communication within the ACE College community.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Real-time attendance tracking and overview.</li>
              <li>Access to academic information, including subjects and grades.</li>
              <li>Digital notice board for important announcements and events.</li>
              <li>Comprehensive academic calendar.</li>
              <li>User-friendly dashboards for students and parents.</li>
              <li>Secure login and profile management.</li>
            </ul>
          </section>
          
          <section className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">About ACE College</h2>
              <p>
                ACE College is a premier institution dedicated to excellence in education and research. 
                With a commitment to nurturing future leaders and innovators, we offer a wide range of programs 
                and a vibrant campus life. Our state-of-the-art facilities and experienced faculty provide an
                enriching learning environment for all students.
              </p>
            </div>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="ACE College Campus" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-md"
              data-ai-hint="college campus" 
            />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">Contact Information</h2>
            <p>
              For any support or inquiries related to the ACE Portal or ACE College, please visit our 
              <a href="/contact" className="text-primary hover:underline"> Contact Us page</a>.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
