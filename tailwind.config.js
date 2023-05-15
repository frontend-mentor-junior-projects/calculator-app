/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		{
			pattern: /translate-x-(6|12)/,
		},
	],
	theme: {
		extend: {
			colors: {
				// Theme 01.
				'theme-01-background-100': 'hsl(222, 26%, 31%)',
				'theme-01-background-200': 'hsl(223, 31%, 20%)',
				'theme-01-background-300': 'hsl(224, 36%, 15%)',
				'theme-01-action-key-100': 'hsl(225, 21%, 49%)',
				'theme-01-action-key-200': 'hsl(224, 28%, 35%)',
				'theme-01-equals-key-100': 'hsl(6, 63%, 50%)',
				'theme-01-equals-key-200': 'hsl(6, 70%, 34%)',
				'theme-01-numeric-key-100': 'hsl(30, 25%, 89%)',
				'theme-01-numeric-key-200': 'hsl(28, 16%, 65%)',
				'theme-01-copy-100': 'hsl(0, 0%, 100%)',
				'theme-01-copy-200': 'hsl(221, 14%, 31%)',
				// Theme 02.
				'theme-02-background-100': 'hsl(0, 0%, 90%)',
				'theme-02-background-200': 'hsl(0, 5%, 81%)',
				'theme-02-background-300': 'hsl(0, 0%, 93%)',
				'theme-02-action-key-100': 'hsl(185, 42%, 37%)',
				'theme-02-action-key-200': 'hsl(185, 58%, 25%)',
				'theme-02-equals-key-100': 'hsl(25, 98%, 40%)',
				'theme-02-equals-key-200': 'hsl(25, 99%, 27%)',
				'theme-02-numeric-key-100': 'hsl(45, 7%, 89%)',
				'theme-02-numeric-key-200': 'hsl(35, 11%, 61%)',
				'theme-02-copy-100': 'hsl(0, 0%, 100%)',
				'theme-02-copy-200': 'hsl(60, 10%, 19%)',
				// Theme 03.
				'theme-03-background-100': 'hsl(268, 75%, 9%)',
				'theme-03-background-200': 'hsl(268, 71%, 12%)',
				'theme-03-background-300': 'hsl(268, 71%, 12%)',
				'theme-03-action-key-100': 'hsl(281, 89%, 26%)',
				'theme-03-action-key-200': 'hsl(285, 91%, 52%)',
				'theme-03-equals-key-100': 'hsl(176, 100%, 44%)',
				'theme-03-equals-key-200': 'hsl(177, 92%, 70%)',
				'theme-03-numeric-key-100': 'hsl(268, 47%, 21%)',
				'theme-03-numeric-key-200': 'hsl(290, 70%, 36%)',
				'theme-03-copy-100': 'hsl(0, 0%, 100%)',
				'theme-03-copy-200': 'hsl(52, 100%, 62%)',
				'theme-03-copy-300': 'hsl(198, 20%, 13%)',
			},
			fontFamily: {
				sans: ['League Spartan', 'sans-serif'],
			},
			fontSize: {
				body: '32px',
			},
		},
	},
	plugins: [],
}
