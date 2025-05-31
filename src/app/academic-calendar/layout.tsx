import { AuthenticatedPage } from '@/components/layout/authenticated-page';

export default function AcademicCalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedPage>{children}</AuthenticatedPage>;
}
