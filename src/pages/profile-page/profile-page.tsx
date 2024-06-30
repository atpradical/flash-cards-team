import src from '@/assets/webp/avatar-default.webp'
import { PersonalInfo } from '@/components/ui/layout-components'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ProfilePage = () => {
  return (
    <Page>
      <FlexContainer jc={'center'}>
        <PersonalInfo name={'Ivan'} photoDesc={'avatar'} src={src} />
      </FlexContainer>
    </Page>
  )
}
