import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ConfirmEmail, ExpiredLink } from '@/components/ui/layout-components'
import { useConfirmEmailMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ConfirmEmailPage = () => {
  const [isRequestCompleted, setIsRequestCompleted] = useState(false)
  const { token } = useParams()
  const [confirmEmail, { isError, isLoading }] = useConfirmEmailMutation()

  useEffect(() => {
    confirmEmail({ code: token ?? '' }).then(() => setIsRequestCompleted(true))
  }, [confirmEmail, token])

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {/* Rule 'no-nested-ternary' disabled to improve readability */}
        {/* eslint-disable-next-line no-nested-ternary */}
        {isLoading || !isRequestCompleted ? null : isError ? <ExpiredLink /> : <ConfirmEmail />}
      </FlexContainer>
    </Page>
  )
}
