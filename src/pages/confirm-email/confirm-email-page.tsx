import { Link } from 'react-router-dom'

import { Button, Typography } from '@/components/ui/primitives'
import { useVerifyEmailMutation } from '@/services'
import { PATH, SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ConfirmEmailPage = () => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  const gap = isTinyScreen ? '5px' : '32px'
  const marginTop = isTinyScreen ? '5px' : '126px'

  const [verifyEmail] = useVerifyEmailMutation()

  const confirmHandler = () => {
    console.log('verifyEmail', verifyEmail)
    //verifyEmail(userId)
  }

  return (
    <Page>
      <FlexContainer fd={'column'} gap={gap} jc={'center'} mt={marginTop} pd={'0 20px'}>
        <Typography>Confirm your email</Typography>
        <Button as={Link} onClick={confirmHandler} to={PATH.ROOT}>
          Confirm your email
        </Button>
      </FlexContainer>
    </Page>
  )
}
