import { AppHeader } from '@/components/layout/header';
import { FooterNav } from '@/components/layout/footer-nav';

interface AuthenticatedPageProps {
  children: React.ReactNode;
}

export function AuthenticatedPage({ children }: AuthenticatedPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 container py-6 md:py-8 pb-20 md:pb-8"> {/* Added padding-bottom for footer nav overlap */}
        {children}
      </main>
      <FooterNav />
    </div>
  );
}
