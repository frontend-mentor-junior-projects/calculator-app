import { Meta, StoryObj } from '@storybook/react'

import Display from '.'

const meta: Meta<typeof Display> = {
	title: 'Components/Display',
	component: Display,
	args: {
		value: '234.12',
	},
}

export default meta
type Story = StoryObj<typeof Display>

export const Default: Story = {}
