import { Link } from 'react-router-dom'

import ArrowBackOutline from '@/assets/components/svgIcons/ArrowBackOutline'
import { LearnCard } from '@/components/ui/layout-components'
import { Button } from '@/components/ui/primitives'
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
      <FlexContainer fd={'column'} gap={'36px'} jc={'left'} pd={'0 20px'}>
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
