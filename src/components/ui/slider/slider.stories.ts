import type { Meta, StoryObj } from '@storybook/react'
import { SliderCustom } from './slider'
import { action } from '@storybook/addon-actions'

const meta = {
  component: SliderCustom,
  argTypes: {
    value: { control: 'object' },
    onValueChange: { action: 'changed' },
  },
  tags: ['autodocs'],
  title: 'Components/SliderCustom',
} satisfies Meta<typeof SliderCustom>

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {
    defaultValue: [0, 100],
    onValueChange: action('changed'),
  },

  // render: ({ defaultValue, onValueChange }) => {
  //   const [value, setValue] = useState<number[]>(defaultValue);

  //   const changeHandler = (newValue: number[]) => {
  //     setValue(newValue);
  //    onValueChange(newValue);
  //   };

  //   return ( <SliderCustom value={value} onValueChange={changeHandler}  />);
  // },
}
