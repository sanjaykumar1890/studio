import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, User, FileText, DollarSign, Settings, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface DetailItem {
  id: string;
  title: string;
  icon: React.ElementType;
  href?: string;
  value?: string;
  description?: string;
}

const personalDetails: DetailItem[] = [
  { id: 'email', title: 'Email', value: 'alex.johnson@example.com', icon: User },
  { id: 'phone', title: 'Phone', value: '+1-202-555-0104', icon: User },
  { id: 'address', title: 'Address', value: '123 Main St, Anytown, USA', icon: User },
];

const serviceLinks: DetailItem[] = [
  { id: 'attendance', title: 'View Detailed Attendance', href: '#attendance', icon: FileText, description: 'Check your attendance records.' },
  { id: 'exams', title: 'Exam Results', href: '#exams', icon: FileText, description: 'View your marks and grades.' },
  { id: 'fees', title: 'Fee Payments', href: '#fees', icon: DollarSign, description: 'Manage your fee payments (placeholder).' },
  { id: 'services', title: 'Student Services', href: '#services', icon: Settings, description: 'Access various student services (placeholder).' },
];

interface ProfileSectionProps {
  title: string;
  items: DetailItem[];
  id?: string;
}

const SectionCard: React.FC<ProfileSectionProps> = ({ title, items, id }) => (
  <Card id={id} className="shadow-lg">
    <CardHeader>
      <CardTitle className="font-headline text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-3">
      {items.map(item => (
        item.href ? (
          <Link key={item.id} href={item.href} passHref>
            <Button variant="ghost" className="w-full justify-between h-auto py-3 px-4 text-left hover:bg-secondary">
              <div className="flex items-center">
                <item.icon className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">{item.title}</p>
                  {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Button>
          </Link>
        ) : (
          <div key={item.id} className="flex items-start p-3 rounded-md border bg-card">
            <item.icon className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm text-muted-foreground">{item.title}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        )
      ))}
    </CardContent>
  </Card>
);


export function ProfileDetailsSection() {
  return (
    <div className="space-y-6">
      <SectionCard title="Personal Details" items={personalDetails} />
      <SectionCard title="Academic & Services" items={serviceLinks} />
       <Card id="privacy" className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl flex items-center">
            <ShieldAlert className="h-5 w-5 mr-2 text-primary"/> Account & Privacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
           <Button variant="outline" className="w-full justify-start">Change Password</Button>
           <Button variant="outline" className="w-full justify-start">Manage Notification Preferences</Button>
           <Button variant="destructive" className="w-full justify-start">Delete Account (Request)</Button>
        </CardContent>
      </Card>
    </div>
  );
}
