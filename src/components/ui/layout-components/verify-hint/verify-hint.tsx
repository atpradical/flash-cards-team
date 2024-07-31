import { FlexContainer } from '@/shared/ui/flex-container'

import s from './verify-hint.module.scss'

import { Button, Typography } from '../../primitives'

type VerifyCardProps = {
  verify: () => void
}

export const VerifyHint = ({ verify }: VerifyCardProps) => {
  const cn = {
    button: s.button,
    container: s.container,
  }

  return (
    <div className={cn.container}>
      <FlexContainer gap={'10px'} jc={'center'}>
        <Typography gray>Email not verified!</Typography>
        <Button className={cn.button} onClick={verify} variant={'link'}>
          Resend request
        </Button>
      </FlexContainer>
    </div>
  )
}
