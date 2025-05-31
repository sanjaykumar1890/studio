import { AuthenticatedPage } from '@/components/layout/authenticated-page';

export default function NoticeBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticatedPage>{children}</AuthenticatedPage>;
}
