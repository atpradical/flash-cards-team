import { PersonalInfo } from '@/components/ui/layout-components'
import { useMeQuery } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ProfilePage = () => {
  const { data: user, isLoading } = useMeQuery()

  if (!user) {
    return
  }

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <PersonalInfo user={user} />
      </FlexContainer>
    </Page>
  )
}
