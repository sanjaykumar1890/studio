import { AuthenticatedPage } from '@/components/layout/authenticated-page';

export default function AcademicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedPage>{children}</AuthenticatedPage>;
}
