import { Button } from '@/components/ui/button'
import { Error404 } from '@/components/ui/error-404/error-404'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const Error404Page = () => {
  return (
    <Page>
      <FlexContainer fd={'column'} gap={'32px'} jc={'center'}>
        <Error404 />
        <Typography variant={'body1'}>{'Sorry! Page not found!'}</Typography>
        <Button as={'a'} href={'/homePage'} variant={'link'}>
          Back to home page
        </Button>
      </FlexContainer>
    </Page>
  )
}
