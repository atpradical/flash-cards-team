import { Link } from 'react-router-dom'

import ArrowBackOutline from '@/assets/components/svgIcons/ArrowBackOutline'
import { Button } from '@/components/ui/button'
import { LearnCard } from '@/components/ui/learn-card'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'
import clsx from 'clsx'

import s from './card-page.module.scss'

export const CardPage = () => {
  const cn = {
    goBack: clsx(s.goBack),
    icon: clsx(s.icon),
  }

  return (
    <Page>
      <FlexContainer fd={'column'} gap={'36px'} jc={'left'}>
        <Button as={Link} className={cn.goBack} to={'/deck'} variant={'link'}>
          <ArrowBackOutline className={cn.icon} />
          Back to Deck
        </Button>
        <FlexContainer jc={'center'}>
          <LearnCard
            answer={'Венера'}
            deckName={'Солнечная система'}
            question={'Самая горячая планета?'}
          />
        </FlexContainer>
      </FlexContainer>
    </Page>
  )
}
