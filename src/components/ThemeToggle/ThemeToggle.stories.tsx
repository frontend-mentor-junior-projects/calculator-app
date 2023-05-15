import { useContext } from 'react'

import { Meta, StoryObj } from '@storybook/react'
import { ThemeContext } from 'context/ThemeContext'

import ThemeToggle from '.'

const meta: Meta<typeof ThemeToggle> = {
	title: 'Components/ThemeToggle',
	component: ThemeToggle,
	decorators: [
		(Story) => {
			const { theme } = useContext(ThemeContext)

			return (
				<div
					className={`
          ${theme === '1' ? 'bg-theme-01-background-100' : ''}
          ${theme === '2' ? 'bg-theme-02-background-100' : ''}
          ${theme === '3' ? 'bg-theme-03-background-100' : ''}
          p-6`}
				>
					<Story />
				</div>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {}
