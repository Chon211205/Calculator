import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from '../components/Display'
import { Keypad } from '../components/Keypad'

const buttons = '7 8 9 + 4 5 6 - 1 2 3 * 0 . = / % +/-'.split(' ')

type CalculatorStateProps = {
  value: string
}

function CalculatorState({ value }: CalculatorStateProps) {
  return (
    <section className="calculator">
      <Display value={value} />
      <Keypad buttons={buttons} onPress={() => {}} />
    </section>
  )
}

const meta = {
  title: 'Calculator/Complete',
  component: CalculatorState
} satisfies Meta<typeof CalculatorState>

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {
  args: {
    value: '0'
  }
}

export const WithResult: Story = {
  args: {
    value: '12345'
  }
}

export const WithDecimalResult: Story = {
  args: {
    value: '3.1428571'
  }
}

export const ErrorState: Story = {
  args: {
    value: 'ERROR'
  }
}
