import { PersonalInfo } from '@/components/ui/layout-components'
import { useMeQuery } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ProfilePage = () => {
  const { data, isFetching } = useMeQuery()

  if (!data) {
    return <Page />
  }

  return (
    <Page load={isFetching}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        <PersonalInfo userData={data} />
      </FlexContainer>
    </Page>
  )
}
