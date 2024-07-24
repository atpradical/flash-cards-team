import { Link } from 'react-router-dom'

import { Error404 } from '@/assets/icons'
import { Button, Typography } from '@/components/ui/primitives'
import { PATH, SCREEN_SIZE } from '@/shared/enums'
import { useCurrentScreenWidth } from '@/shared/hooks'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

import s from './error-404-page.module.scss'

export const Error404Page = () => {
  const currentScreenWidth = useCurrentScreenWidth()
  const breakpoint = SCREEN_SIZE.MOBILE_TINY
  const isTinyScreen = currentScreenWidth <= breakpoint

  const gap = isTinyScreen ? '5px' : '32px'
  const marginTop = isTinyScreen ? '5px' : '126px'

  return (
    <Page>
      <FlexContainer fd={'column'} gap={gap} jc={'center'} mt={marginTop} pd={'0 20px'}>
        <Error404 className={s.error} />
        <Typography variant={'body1'}>{'Sorry! Page not found!'}</Typography>
        <Button as={Link} to={PATH.ROOT}>
          Back to home page
        </Button>
      </FlexContainer>
    </Page>
  )
}
