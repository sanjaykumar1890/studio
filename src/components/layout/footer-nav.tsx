'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Newspaper, BookOpen, MessageSquare, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/notice-board', label: 'Notices', icon: Newspaper },
  { href: '/academics', label: 'Academics', icon: BookOpen },
  { href: '/contact', label: 'Chat', icon: MessageSquare },
  { href: '/profile', label: 'Profile', icon: User },
];

export function FooterNav() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <nav className="container flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href === '/dashboard' && pathname.startsWith('/dashboard'));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center p-2 rounded-md transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary/80'
              )}
            >
              <item.icon className="h-6 w-6 mb-0.5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}
