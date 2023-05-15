import { useContext } from 'react'

import { ThemeContext } from 'context/ThemeContext'

type DisplayProps = {
	value: string
	errorMessage: string
}

const Display = ({ value, errorMessage }: DisplayProps) => {
	const { theme } = useContext(ThemeContext)

	return (
		<section className='mb-6'>
			<div
				className={`
        ${theme === '1' ? 'bg-theme-01-background-300' : ''}
        ${theme === '2' ? 'bg-theme-02-background-300' : ''}
        ${theme === '3' ? 'bg-theme-03-background-300' : ''}
        rounded mb-1 flex flex-col items-end justify-center h-[88px] sm:h-[128px] px-6 sm:py-8`}
			>
				<span
					data-testid='calculatorDisplay'
					className={`
            ${theme === '1' ? 'text-theme-01-copy-100' : ''}
            ${theme === '2' ? 'text-theme-02-copy-200' : ''}
            ${theme === '3' ? 'text-theme-03-copy-100' : ''}
            inline-block w-full text-[32px] sm:text-[48px] font-bold text-right leading-none bg-transparent`}
				>
					{value}
				</span>
			</div>

			{errorMessage && (
				<p
					className={`
          ${theme === '1' ? 'text-theme-01-copy-100' : ''}
          ${theme === '2' ? 'text-theme-02-copy-100' : ''}
          ${theme === '3' ? 'text-theme-03-copy-100' : ''}
          text-right`}
				>
					{errorMessage}
				</p>
			)}
		</section>
	)
}

export default Display
