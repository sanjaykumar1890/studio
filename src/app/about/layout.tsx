import { AuthenticatedPage } from '@/components/layout/authenticated-page';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedPage>{children}</AuthenticatedPage>;
}
