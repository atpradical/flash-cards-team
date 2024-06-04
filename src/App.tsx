import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox/checkbox'
import { Typography } from '@/components/ui/typography'

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
        <Typography variant={'h2'}>Default</Typography>
        <Checkbox />
        <Checkbox checked={false} />
        <Checkbox label={'First checkbox'} />
        <Checkbox label={'Second checkbox'} />
        <Typography variant={'h2'}>Disabled</Typography>
        <Checkbox disabled />
        <Checkbox checked={false} disabled />
        <Checkbox checked disabled label={'Third checkbox'} />
        <Checkbox checked={false} disabled label={'Third checkbox'} />
      </div>
    </>
  )
}
