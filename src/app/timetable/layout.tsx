import { AuthenticatedPage } from '@/components/layout/authenticated-page';

export default function TimetableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedPage>{children}</AuthenticatedPage>;
}
