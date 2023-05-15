import { useContext } from 'react'

import { ThemeContext } from 'context/ThemeContext'

const Logo = () => {
	const { theme } = useContext(ThemeContext)
	return (
		<h1
			className={`
    ${theme === '1' ? 'text-theme-01-copy-100' : ''}
    ${theme === '2' ? 'text-theme-02-copy-200' : ''}
    ${theme === '3' ? 'text-theme-03-copy-200' : ''}
    text-[32px]`}
		>
			calc
		</h1>
	)
}

export default Logo
