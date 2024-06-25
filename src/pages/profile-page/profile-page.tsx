import { PersonalInfo } from '@/components/ui/personal-info'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import src from '@/assets/webp/avatar-default.webp'

export const ProfilePage = () => {
  return (
    <Page>
      <FlexContainer jc={'center'}>
        <PersonalInfo name={'Ivan'} photoDesc={'avatar'} src={src} />
      </FlexContainer>
    </Page>
  )
}
