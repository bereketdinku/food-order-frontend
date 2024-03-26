import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UseProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  if (isGetLoading) {
    return <span>Loading...</span>;
  }
  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
