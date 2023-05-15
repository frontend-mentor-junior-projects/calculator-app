import { Meta, StoryObj } from '@storybook/react'

import { Key } from '.'

const meta: Meta<typeof Key> = {
	title: 'Components/Key',
	component: Key,
	decorators: [
		(Story) => {
			return (
				<div className='bg-background-200 p-6'>
					<Story />
				</div>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof Key>

export const NumericKey: Story = {
	args: {
		size: 'small',
		type: 'numeric',
		value: '5',
	},
}

export const OperatorKey: Story = {
	args: {
		size: 'small',
		type: 'operator',
		value: '+',
	},
}

export const EqualsKey: Story = {
	args: {
		size: 'large',
		type: 'equals',
		value: '=',
	},
}

export const ResetKey: Story = {
	args: {
		size: 'large',
		type: 'action',
		value: 'Reset',
	},
}

export const DeleteKey: Story = {
	args: {
		size: 'small',
		type: 'action',
		value: 'Del',
	},
}
