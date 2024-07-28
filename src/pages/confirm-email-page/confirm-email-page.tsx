import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ConfirmEmail, ExpiredLink } from '@/components/ui/layout-components'
import { useConfirmEmailMutation } from '@/services'
import { FlexContainer } from '@/shared/ui/flex-container'
import { Page } from '@/shared/ui/page'

export const ConfirmEmailPage = () => {
  const { token } = useParams()
  const [confirmEmail, { isError, isLoading }] = useConfirmEmailMutation()

  useEffect(() => {
    confirmEmail({ code: token ?? '' })
  }, [confirmEmail, token])

  return (
    <Page load={isLoading}>
      <FlexContainer jc={'center'} pd={'0 20px'}>
        {isError ? <ExpiredLink /> : <ConfirmEmail />}
      </FlexContainer>
    </Page>
  )
}
