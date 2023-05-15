import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import Main from '.'

const meta: Meta<typeof Main> = {
	title: 'Components/Main',
	component: Main,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof Main>

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const getKey = (value: string) => {
			return canvas.getByRole('button', { name: value })
		}

		const clickKey = async (value: string) => {
			const key = canvas.getByRole('button', { name: value })
			await userEvent.click(key)
		}

		// Calculator display should be empty.
		const calculatorDisplay = canvas.getByTestId('calculatorDisplay')
		await expect(calculatorDisplay).toHaveTextContent('')

		// Calculator display should show 5 when 5 is pressed.
		const number5Key = getKey('5')
		await userEvent.click(number5Key)

		await expect(calculatorDisplay).toHaveTextContent('5')

		// Reset calculator display.
		const resetKey = canvas.getByRole('button', { name: 'RESET' })
		await userEvent.click(resetKey)

		await expect(calculatorDisplay).toHaveTextContent('')

		// Delete value from calculator display.
		await clickKey('5')
		await clickKey('+')
		await clickKey('5')

		const deleteKey = canvas.getByRole('button', { name: 'DEL' })
		await userEvent.click(deleteKey)

		await expect(calculatorDisplay).toHaveTextContent('5+')

		// Calculate 5+5.
		await userEvent.click(resetKey)
		await clickKey('5')
		await clickKey('+')
		await clickKey('5')

		const equalsKey = canvas.getByRole('button', { name: '=' })
		await userEvent.click(equalsKey)

		await expect(calculatorDisplay).toHaveTextContent('10')

		// Don't calculate 5+. Show message when format is not valid.
		await clickKey('+')
		await userEvent.click(equalsKey)

		const errorMessage = canvas.getByText('Invalid format')
		await expect(calculatorDisplay).toHaveTextContent('10+')
		await expect(errorMessage).toBeInTheDocument()

		// Change colors when theme changes to 2.
	},
}
