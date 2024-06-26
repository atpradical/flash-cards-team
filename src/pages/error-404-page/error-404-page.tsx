import { Link } from 'react-router-dom'

import { Error404 } from '@/assets/components/svgIcons'
import { Button, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const Error404Page = () => {
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'32px'} jc={'center'} mt={'126px'} pd={'0 20px'}>
        <Error404 />
        <Typography variant={'body1'}>{'Sorry! Page not found!'}</Typography>
        <Button as={Link} to={'/'}>
          Back to home page
        </Button>
      </FlexContainer>
    </Page>
  )
}
