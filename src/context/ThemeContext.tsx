import { createContext, useState } from 'react'

export type ThemeType = '1' | '2' | '3'

type ThemeContextType = {
	theme: ThemeType
	changeTheme: (theme: ThemeType) => void
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: '1',
	changeTheme: () => {},
})

type ThemeProviderProps = {
	children: React.ReactNode | React.ReactNode[]
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<ThemeType>('1')

	// eslint-disable-next-line react/jsx-no-constructed-context-values
	const value = {
		theme,
		changeTheme: (newTheme: ThemeType) => {
			return setTheme(newTheme)
		},
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
