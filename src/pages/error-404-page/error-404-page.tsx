import { Link } from 'react-router-dom'

import { Error404 } from '@/assets/components/svgIcons'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const Error404Page = () => {
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'32px'} jc={'center'}>
        <Error404 />
        <Typography variant={'body1'}>{'Sorry! Page not found!'}</Typography>
        <Button>
          <Link to={'/homePage'}>Back to home page</Link>
        </Button>
      </FlexContainer>
    </Page>
  )
}
