import { PersonalInfoForm } from '@/components/forms'
import { PersonalInfo } from '@/components/ui/layout-components'
import { useProfilePageData } from '@/shared/hooks/use-profile-page-data'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ProfilePage = () => {
  const {
    cancelPersonalInfoHandler,
    deleteAvatarHandler,
    editNameHandler,
    isEditMode,
    isLoading,
    logoutHandler,
    saveNameHandler,
    uploadHandler,
    user,
  } = useProfilePageData()

  if (!user) {
    return <Page />
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {isEditMode ? (
          <PersonalInfoForm
            onCancel={cancelPersonalInfoHandler}
            onSubmit={saveNameHandler}
            personalData={user}
          />
        ) : (
          <PersonalInfo
            deleteAvatar={deleteAvatarHandler}
            editName={editNameHandler}
            logout={logoutHandler}
            uploadAvatar={uploadHandler}
            userData={user}
          />
        )}
      </FlexContainer>
    </Page>
  )
}
