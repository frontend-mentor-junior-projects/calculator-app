import type { Preview } from '@storybook/react'
import React from 'react'
import 'tailwindcss/tailwind.css'

import { ThemeProvider } from '../src/context/ThemeContext'

const CUSTOM_VIEWPORTS = {
	mobile375: {
		name: 'Mobile 375',
		styles: {
			width: '375px',
			height: '600px',
		},
		type: 'mobile',
	},
	tablet768: {
		name: 'Tablet 768',
		styles: {
			width: '768px',
			height: '1024px',
		},
		type: 'mobile',
	},
	desktop1440: {
		name: 'Desktop 1440',
		styles: {
			width: '1440px',
			height: '1024px',
		},
		type: 'mobile',
	},
}

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			storySort: (a, b) =>
				a.id === b.id
					? 0
					: a.id.localeCompare(b.id, undefined, { numeric: true }),
		},
		viewport: {
			viewports: { ...CUSTOM_VIEWPORTS },
		},
		// Layout.
		// layout: 'fullscreen',
	},
	// Decorators.
	decorators: [
		(Story) => {
			return (
				<ThemeProvider>
					<Story />
				</ThemeProvider>
			)
		},
	],
}

export default preview
