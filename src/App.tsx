import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FlexContainer } from '@/shared/ui/flex-container'
import { ControlledRadio } from '@/shared/ui/form-components/controlled-radio'
import { Header } from '@/shared/ui/header'
import { Layout } from '@/shared/ui/layout'
import { Page } from '@/shared/ui/page'
import { Option } from '@/types'

type SomeFormValues = {
  someRadio: string
}

export function App() {
  const { control, handleSubmit } = useForm<SomeFormValues>()

  const foo = handleSubmit(data => {
    console.log(data)
  })
  const mockRadioOptions: Option[] = [
    { id: '1', label: 'Default', value: '1' },
    { id: '2', label: 'Comfortable', value: '2' },
    { id: '3', label: 'Luxury', value: '3' },
    { id: '4', label: 'Ultra wealth', value: '4' },
  ]

  return (
    <Layout>
      <Header />
      <Page>
        <form onSubmit={foo}>
          <FlexContainer ai={'start'} fd={'column'} gap={'10px'} style={{ maxWidth: '500px' }}>
            <div>Hi Team 🤘🤘🤘 Controlled components examples:</div>
            <ControlledRadio control={control} name={'someRadio'} options={mockRadioOptions} />
            <Button>Submit</Button>
          </FlexContainer>
        </form>
      </Page>
    </Layout>
  )
}
