import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox'

export function App() {
  return (
    <>
      <div>Hi Team 🤘🤘🤘</div>
      <div>
        <Button>Primary</Button>
        <Button variant={'secondary'}>Secondary</Button>
        <Button as={'a'} variant={'link'}>
          Button as link
        </Button>
      </div>
      <div>
        <Checkbox label={'First checkbox'} />
        <Checkbox label={'Second checkbox'} />
        <Checkbox disabled label={'Third checkbox'} />
      </div>
    </>
  )
}
