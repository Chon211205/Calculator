import type { Meta, StoryObj } from '@storybook/react-vite'
import { Keypad } from '../components/Keypad'

const calculatorButtons = '7 8 9 + 4 5 6 - 1 2 3 * 0 . = / % +/-'.split(' ')

const meta = {
  title: 'Calculator/Keyboard',
  component: Keypad,
  args: {
    onPress: () => {}
  }
} satisfies Meta<typeof Keypad>

export default meta

type Story = StoryObj<typeof meta>

export const Complete: Story = {
  args: {
    buttons: calculatorButtons
  }
}

export const BasicOperations: Story = {
  args: {
    buttons: '7 8 9 + 4 5 6 - 1 2 3 * 0 ='.split(' ')
  }
}

export const AdvancedOperations: Story = {
  args: {
    buttons: '7 8 9 / 4 5 6 % 1 2 3 +/- 0 . = +'.split(' ')
  }
}
