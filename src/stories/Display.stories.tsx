import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from '../components/Display'

const meta = {
  title: 'Calculator/Display',
  component: Display
} satisfies Meta<typeof Display>

export default meta

type Story = StoryObj<typeof meta>

export const Initial: Story = {
  args: {
    value: '0'
  }
}

export const WithNumber: Story = {
  args: {
    value: '12345'
  }
}

export const WithDecimal: Story = {
  args: {
    value: '3.1428571'
  }
}

export const WithMaxValue: Story = {
  args: {
    value: '999999999'
  }
}

export const WithError: Story = {
  args: {
    value: 'ERROR'
  }
}