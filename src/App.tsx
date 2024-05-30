import { Button } from '@/components/ui/button'
import { Radio } from '@/components/ui/radio'

export function App() {
  const mockRadio = [
    { defaultValue: true, id: '1', label: 'Default', value: 1 },
    { id: '2', label: 'Comfortable', value: 2 },
    { id: '3', label: 'Luxury', value: 3 },
    { disabled: true, id: '4', label: 'Ultra wealth', value: 4 },
  ]

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
        <Radio items={mockRadio} />
      </div>
    </>
  )
}
