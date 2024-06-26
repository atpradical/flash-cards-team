import cover404 from '@/assets/webp/cover404.webp'
import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
import { AspectRatio } from '@/components/ui/aspect-ratio'

import { Button } from '../button'
import { Typography } from '../typography'

type Error404Props = {
  text?: string
}

export const Error404 = ({ text }: Error404Props) => {
  return (
    <>
      <AspectRatio ratio={ASPECT_RATIO.ExtraWide} variant={'xl'}>
        <img alt={'some question'} src={cover404} />
      </AspectRatio>
      <Typography>{text}</Typography>
      <Button></Button>
    </>
  )
}
