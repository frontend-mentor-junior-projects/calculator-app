import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
	it('should render App', () => {
		// Arrange
		render(<App />)
		// Act
		// Expect
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Calculator App'
		)
	})
})
