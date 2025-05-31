import { AuthenticatedPage } from '@/components/layout/authenticated-page';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedPage>{children}</AuthenticatedPage>;
}
