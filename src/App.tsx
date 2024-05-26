import { Button } from '@/components/ui/button'

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
    </>
  )
}
