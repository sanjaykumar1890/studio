import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, Globe, Youtube, Linkedin, Twitter, MessageSquare } from 'lucide-react'; // Assuming Facebook is not in lucide-react, using Twitter as example
import Link from 'next/link';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'info@acecollege.edu', href: 'mailto:info@acecollege.edu' },
  { icon: Phone, label: 'Phone', value: '+1 (234) 567-8900', href: 'tel:+12345678900' },
  { icon: Globe, label: 'Website', value: 'www.acecollege.edu', href: 'https://www.acecollege.edu' },
];

const socialItems = [
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/acecollege' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/acecollege' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/acecollege' }, // Example
];

export default function ContactUsPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center"><MessageSquare className="mr-2 h-6 w-6 text-primary" />Contact Us</CardTitle>
          <CardDescription>Get in touch with ACE Portal support or college administration.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">College Contact Information</h3>
            <div className="space-y-3">
              {contactItems.map(item => (
                <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-md hover:bg-secondary transition-colors group">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-accent" />
                  <div>
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
            <div className="flex space-x-4">
              {socialItems.map(item => (
                <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                  <item.icon className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          
          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-2">Terms and Conditions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              By using the ACE Portal, you agree to comply with all applicable laws and regulations. 
              The information provided is for informational purposes only. The college reserves the right 
              to make changes to the academic calendar, schedules, and policies without prior notice. 
              Unauthorized access or use of this portal is strictly prohibited. Please ensure your login 
              credentials are kept confidential. For any discrepancies or issues, contact the administration.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
