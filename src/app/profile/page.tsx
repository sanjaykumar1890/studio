import { UserInfoCard } from '@/components/profile/user-info-card';
import { ProfileDetailsSection } from '@/components/profile/profile-details-section';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <UserInfoCard />
      <ProfileDetailsSection />
    </div>
  );
}
