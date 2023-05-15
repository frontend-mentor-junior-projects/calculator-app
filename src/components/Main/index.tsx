import { useContext, useState } from 'react'

import Display from 'components/Display'
import Keypad from 'components/Keypad'
import Logo from 'components/Logo'
import ThemeToggle from 'components/ThemeToggle'
import { ThemeContext } from 'context/ThemeContext'

const Main = () => {
	const [value, setValue] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const { theme } = useContext(ThemeContext)

	return (
		<main
			className={`
        ${theme === '1' ? 'bg-theme-01-background-100' : ''}
        ${theme === '2' ? 'bg-theme-02-background-100' : ''}
        ${theme === '3' ? 'bg-theme-03-background-100' : ''}
        px-6 py-8 min-h-screen transition-colors duration-300 ease-linear flex flex-col items-center justify-center`}
		>
			<div className='max-w-[544px] mx-auto '>
				<header className='flex flex-row justify-between items-center pb-8'>
					<Logo />

					<ThemeToggle />
				</header>

				<Display value={value} errorMessage={errorMessage} />

				<Keypad
					value={value}
					onChange={(newValue: string) => {
						setValue((prevValue) => {
							return prevValue + newValue
						})
					}}
					onReset={() => {
						setValue('')
						setErrorMessage('')
					}}
					onDelete={() => {
						setValue((prevValue) => {
							return prevValue.slice(0, -1)
						})
						setErrorMessage('')
					}}
					onEquals={(newValue: string, message: string) => {
						setValue(newValue)
						setErrorMessage(message)
					}}
				/>
			</div>
		</main>
	)
}

export default Main
