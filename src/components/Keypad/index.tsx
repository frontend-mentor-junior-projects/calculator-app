import { useContext } from 'react'

import Key from 'components/Key'
import { ThemeContext } from 'context/ThemeContext'

type KeypadProps = {
	value: string
	onChange: (value: string) => void
	onReset: () => void
	onDelete: () => void
	onEquals: (value: string, errorMessage: string) => void
}

const Keypad = ({
	value,
	onChange,
	onReset,
	onDelete,
	onEquals,
}: KeypadProps) => {
	const { theme } = useContext(ThemeContext)

	return (
		<section>
			<div
				className={`
        ${theme === '1' ? 'bg-theme-01-background-200' : ''}
        ${theme === '2' ? 'bg-theme-02-background-200' : ''}
        ${theme === '3' ? 'bg-theme-03-background-200' : ''}
        p-6 sm:p-8 rounded space-y-4 sm:space-y-6`}
			>
				<div className='space-x-3 sm:space-x-6'>
					<Key.Number value='7' onClick={onChange} />
					<Key.Number value='8' onClick={onChange} />
					<Key.Number value='9' onClick={onChange} />
					<Key.Delete onClick={onDelete} />
				</div>
				<div className='space-x-3 sm:space-x-6'>
					<Key.Number value='4' onClick={onChange} />
					<Key.Number value='5' onClick={onChange} />
					<Key.Number value='6' onClick={onChange} />
					<Key.Operator value='+' onClick={onChange} />
				</div>
				<div className='space-x-3 sm:space-x-6'>
					<Key.Number value='1' onClick={onChange} />
					<Key.Number value='2' onClick={onChange} />
					<Key.Number value='3' onClick={onChange} />
					<Key.Operator value='-' onClick={onChange} />
				</div>
				<div className='space-x-3 sm:space-x-6'>
					<Key.Number value='.' onClick={onChange} />
					<Key.Number value='0' onClick={onChange} />
					<Key.Operator value='/' onClick={onChange} />
					<Key.Operator value='x' onClick={onChange} />
				</div>
				<div className='space-x-3 sm:space-x-6'>
					<Key.Reset onClick={onReset} />
					<Key.Equals displayValue={value} onClick={onEquals} />
				</div>
			</div>
		</section>
	)
}

export default Keypad
