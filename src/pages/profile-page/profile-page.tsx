import { PersonalInfo } from '@/components/ui/personal-info'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ProfilePage = () => {
  return (
    <Page>
      <FlexContainer jc={'center'}>
        <PersonalInfo
          name={'Ivan'}
          photoDesc={'avatar'}
          src={'@/assets/webp/avatar-default.webp'}
        />
      </FlexContainer>
    </Page>
  )
}
