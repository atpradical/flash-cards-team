import { CheckEmail } from '@/components/ui/layout-components'
import { SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const CheckEmailPage = () => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  const gap = isTinyScreen ? '5px' : '32px'
  const marginTop = isTinyScreen ? '5px' : '126px'

  return (
    <Page>
      <FlexContainer fd={'column'} gap={gap} jc={'center'} mt={marginTop} pd={'0 20px'}>
        <CheckEmail email={''} name={''} />
      </FlexContainer>
    </Page>
  )
}
