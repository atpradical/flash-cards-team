import { ASPECT_RATIO } from '@/common/enums/aspect-ratio'
import { DropdownSettings } from '@/components/layout/deckSettingsDropdown/dropdownSettings'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Typography } from '@/components/ui/typography'
import { FlexContainer } from '@/shared/ui/flex-container'
import clsx from 'clsx'

import s from './deck-title.module.scss'

type DeckTitleProps = {
  image: string
  imgDescription: string
  title: string
}

export const DeckTitle = ({ image, imgDescription, title }: DeckTitleProps) => {
  const cn = {
    container: clsx(s.container),
    image: clsx(s.image),
  }

  return (
    <div className={cn.container}>
      <FlexContainer>
        <Typography as={'h1'} variant={'h1'}>
          {title}
        </Typography>
        <DropdownSettings />
      </FlexContainer>
      {image && (
        <AspectRatio ratio={ASPECT_RATIO.Standard} variant={'m'}>
          <img alt={imgDescription} className={cn.image} src={image} />
        </AspectRatio>
      )}
    </div>
  )
}
