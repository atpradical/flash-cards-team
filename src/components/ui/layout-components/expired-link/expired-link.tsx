import { Button, Card, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

import s from './expired-link.module.scss'

export const ExpiredLink = () => {
  return (
    <Card className={s.container}>
      <FlexContainer fd={'column'} gap={'36px'}>
        <Typography as={'h1'} variant={'h1'}>
          Link Expired
        </Typography>
        <Typography gray variant={'body2'}>
          The temporary link has expired.
        </Typography>
        <Button fullWidth>Retry</Button>
      </FlexContainer>
    </Card>
  )
}
