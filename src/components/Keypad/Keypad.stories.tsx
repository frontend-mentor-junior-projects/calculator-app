import { Meta, StoryObj } from '@storybook/react'

import Keypad from '.'

const meta: Meta<typeof Keypad> = {
	title: 'Components/Keypad',
	component: Keypad,
}

export default meta
type Story = StoryObj<typeof Keypad>

export const Default: Story = {}
