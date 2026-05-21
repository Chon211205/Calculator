import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button'

const meta = {
  title: 'Calculator/Button',
  component: Button,
  args: {
    onPress: () => {}
  }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Number: Story = {
  args: {
    value: '7'
  }
}

export const Operator: Story = {
  args: {
    value: '+'
  }
}

export const Function: Story = {
  args: {
    value: '+/-'
  }
}

export const Equal: Story = {
  args: {
    value: '='
  }
}
