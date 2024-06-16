import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'

export const SignUpForm = () => {
  return (
    <Card>
      <FlexContainer style={{ border: '1px solid red' }}>
        <Typography as={'h1'} variant={'h3'}>
          Sign Up
        </Typography>
      </FlexContainer>
    </Card>
  )
}
