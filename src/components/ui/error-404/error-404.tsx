import cover404 from '@/assets/webp/cover404.webp'
import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import s from './error-404.module.scss'
import clsx from 'clsx'

type Error404Props = {
  text?: string
}

export const Error404 = ({ text = 'Sorry! Page not found!' }: Error404Props) => {
  const pageHomeHandler = () => {
    console.log(`navigate('homePage')`)
  }

  const cn = clsx(s.image)

  return (
    <FlexContainer fd={'column'} gap={'32px'}>
      <AspectRatio ratio={ASPECT_RATIO.Large} variant={'xl'}>
        {/*variant={'xl'} нужно сделать опционально*/}
        <img alt={'some question'} className={cn} src={cover404} />
      </AspectRatio>
      <Typography variant={'body1'}>{text}</Typography>
      <Button onClick={pageHomeHandler}>Back to home page</Button>
    </FlexContainer>
  )
}
