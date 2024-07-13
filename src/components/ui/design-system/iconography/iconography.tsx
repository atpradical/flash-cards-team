import { ComponentPropsWithoutRef } from 'react'

import { Icon } from '@/components/ui/design-system/iconography/iconography.mock'
import { Card, Typography } from '@/components/ui/primitives'
import { FlexContainer } from '@/shared/ui/flex-container'

import { cn } from './iconography.styles'

type iconListProps = {
  icons: Icon[]
}

export const Iconography = ({ icons }: iconListProps) => {
  return (
    <Card className={cn.container}>
      <FlexContainer ai={'start'} fw={'wrap'} gap={'12px'}>
        {icons.map(el => {
          return (
            <div className={cn.wrapper} key={el.name}>
              <IconBox component={el.component} />
              <Typography className={cn.title} variant={'caption'}>
                {el.name}
              </Typography>
            </div>
          )
        })}
      </FlexContainer>
    </Card>
  )
}

type IconBoxProps = ComponentPropsWithoutRef<'div'> & Omit<Icon, 'name'>

const IconBox = ({ component, ...rest }: IconBoxProps) => {
  return (
    <div className={cn.box} {...rest}>
      {component}
    </div>
  )
}
