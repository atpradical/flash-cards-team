import { PersonalInfoForm } from '@/components/forms'
import { PersonalInfo } from '@/components/ui/layout-components'
import { useProfile } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ProfilePage = () => {
  const {
    cancelHandler,
    changeModeHandler,
    changeNickNameHandler,
    data,
    deleteAvatarHandler,
    deleteUserAccountHandler,
    editMode,
    isLoadingData,
    logoutHandler,
    updateAvatarHandler,
  } = useProfile()

  if (!data) {
    return <Page />
  }

  return (
    <Page load={isLoadingData}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {editMode ? (
          <PersonalInfoForm
            avatar={data.avatar ?? null}
            name={data.name}
            onCancel={cancelHandler}
            onSubmit={changeNickNameHandler}
          />
        ) : (
          <PersonalInfo
            avatar={data.avatar ?? null}
            delAccount={deleteUserAccountHandler}
            email={data.email}
            name={data.name}
            onDelete={deleteAvatarHandler}
            onEdit={changeModeHandler}
            onLogout={logoutHandler}
            onUpdate={updateAvatarHandler}
          />
        )}
      </FlexContainer>
    </Page>
  )
}
