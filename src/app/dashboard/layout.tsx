import { AuthenticatedPage } from '@/components/layout/authenticated-page';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedPage>{children}</AuthenticatedPage>;
}
