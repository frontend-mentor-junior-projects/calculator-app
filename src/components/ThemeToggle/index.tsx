import { useContext, useState } from 'react'

import { ThemeContext, ThemeType } from 'context/ThemeContext'
import Draggable from 'react-draggable'

const ThemeToggle = () => {
	const DISTANCE = 24
	const NUMBER_OF_THEMES = 3

	const [translateX, setTranslateX] = useState(0)

	const { theme, changeTheme } = useContext(ThemeContext)

	return (
		<div
			className={`
      ${theme === '1' ? 'text-theme-01-copy-100' : ''}
      ${theme === '2' ? 'text-theme-02-copy-200' : ''}
      ${theme === '3' ? 'text-theme-03-copy-200' : ''}
      flex flex-row`}
		>
			<p className='mr-6 self-end'>Theme</p>

			<div className='w-[72px]'>
				<div className='flex flex-row justify-between text-[10px] mx-2 mb-1'>
					{Array.from({ length: NUMBER_OF_THEMES }).map((_item, index) => {
						const newTheme = String(index + 1) as ThemeType

						return <span key={newTheme}>{index + 1}</span>
					})}
				</div>
				<div
					className={`
          ${theme === '1' ? 'bg-theme-01-background-200' : ''}
          ${theme === '2' ? 'bg-theme-02-background-200' : ''}
          ${theme === '3' ? 'bg-theme-03-background-200' : ''}
            rounded-full py-[4px] px-[4px]`}
				>
					<Draggable
						bounds={{ left: 0, right: 48 }}
						axis='x'
						grid={[24, 24]}
						defaultPosition={{ x: 0, y: 0 }}
						onStop={(_event, data) => {
							if (Number(data.x.toFixed(0)) === 0) {
								setTranslateX(0)
								changeTheme('1')
							}

							if (Number(data.x.toFixed(0)) === DISTANCE * 1) {
								setTranslateX(DISTANCE * 1)
								changeTheme('2')
							}

							if (Number(data.x.toFixed(0)) === DISTANCE * 2) {
								setTranslateX(DISTANCE * 2)
								changeTheme('3')
							}
						}}
					>
						<div
							className={`
              ${theme === '1' ? 'bg-theme-01-equals-key-100' : ''}
              ${theme === '2' ? 'bg-theme-02-equals-key-100' : ''}
              ${theme === '3' ? 'bg-theme-03-equals-key-100' : ''}
              rounded-full w-4 h-4 translate-x-${translateX} transition duration-300 ease-out
              hover:cursor-pointer`}
						/>
					</Draggable>
				</div>
			</div>
		</div>
	)
}

export default ThemeToggle
