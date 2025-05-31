import { AuthenticatedPage } from '@/components/layout/authenticated-page';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedPage>{children}</AuthenticatedPage>;
}
