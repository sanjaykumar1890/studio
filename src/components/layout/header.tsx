import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StudentLogo } from '@/components/ui/logo';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

interface NavItemProps {
  href: string;
  label: string;
  onClose?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, onClose }) => (
  <SheetClose asChild>
    <Link href={href} passHref>
      <Button variant="ghost" className="w-full justify-start text-base py-3" onClick={onClose}>
        {label}
      </Button>
    </Link>
  </SheetClose>
);

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 flex flex-col items-center space-y-3 bg-primary text-primary-foreground">
                  <Image
                    src="https://placehold.co/100x100.png"
                    alt="Student Photo"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-primary-foreground"
                    data-ai-hint="student portrait"
                  />
                  <div className="text-center">
                    <p className="font-semibold text-lg">Student Name</p>
                    <p className="text-sm">Roll No: STUDENT001</p>
                  </div>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                  <NavItem href="/about" label="About Us" />
                  <Separator />
                  <NavItem href="/contact" label="Contact Us" />
                </nav>
                <div className="p-4 mt-auto border-t">
                  <Button variant="outline" className="w-full">Logout</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/dashboard" className="flex items-center space-x-2">
            <StudentLogo className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-primary font-headline">ACE Portal</span>
          </Link>
        </div>
        
        {/* Desktop navigation (optional, or user profile icon) */}
        <nav className="hidden md:flex items-center space-x-2">
           <Button variant="ghost" size="sm" asChild>
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">Logout</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
