import { useContext } from 'react'

import { ThemeContext } from 'context/ThemeContext'

import utils from './utils'

const HEIGHT = 'h-14'
const WIDTH_SMALL = 'w-[56px] sm:w-[100px]'
const WIDTH_LARGE = 'w-[124px] sm:w-[228px]'

type KeyProps = {
	type: 'numeric' | 'operator' | 'action' | 'equals'
	size: 'small' | 'large'
	value: string
	onClick: () => void
}

export const Key = ({ type, size, value, onClick }: KeyProps) => {
	const { theme } = useContext(ThemeContext)

	return (
		<button
			type='button'
			onClick={() => {
				onClick()
			}}
			className={`
        ${
					theme === '1' && (type === 'numeric' || type === 'operator')
						? `bg-theme-01-numeric-key-200`
						: ''
				}
        ${
					theme === '1' && type === 'action' ? `bg-theme-01-action-key-200` : ''
				}
        ${
					theme === '1' && type === 'equals' ? `bg-theme-01-equals-key-200` : ''
				}

        ${
					theme === '2' && (type === 'numeric' || type === 'operator')
						? `bg-theme-02-numeric-key-200`
						: ''
				}
        ${
					theme === '2' && type === 'action' ? `bg-theme-02-action-key-200` : ''
				}
        ${
					theme === '2' && type === 'equals' ? `bg-theme-02-equals-key-200` : ''
				}

        ${
					theme === '3' && (type === 'numeric' || type === 'operator')
						? `bg-theme-03-numeric-key-200`
						: ''
				}
        ${
					theme === '3' && type === 'action' ? `bg-theme-03-action-key-200` : ''
				}
        ${
					theme === '3' && type === 'equals' ? `bg-theme-03-equals-key-200` : ''
				}
        rounded`}
		>
			<span
				className={`transtion flex
          ${HEIGHT}
          ${size === 'small' ? WIDTH_SMALL : ''}
          ${size === 'large' ? WIDTH_LARGE : ''}

          ${
						theme === '1' && (type === 'numeric' || type === 'operator')
							? `bg-theme-01-numeric-key-100 text-theme-01-copy-200 text-[24px]`
							: ''
					}
          ${
						theme === '1' && type === 'action'
							? `bg-theme-01-action-key-100 text-theme-01-copy-100 text-[16px]`
							: ''
					}
          ${
						theme === '1' && type === 'equals'
							? `bg-theme-01-equals-key-100 text-theme-01-copy-100 text-[16px]`
							: ''
					}

          ${
						theme === '2' && (type === 'numeric' || type === 'operator')
							? `bg-theme-02-numeric-key-100 text-theme-02-copy-200 text-[24px]`
							: ''
					}
          ${
						theme === '2' && type === 'action'
							? `bg-theme-02-action-key-100 text-theme-02-copy-100 text-[16px]`
							: ''
					}
          ${
						theme === '2' && type === 'equals'
							? `bg-theme-02-equals-key-100 text-theme-02-copy-100 text-[16px]`
							: ''
					}

          ${
						theme === '3' && (type === 'numeric' || type === 'operator')
							? `bg-theme-03-numeric-key-100 text-theme-03-copy-200 text-[24px]`
							: ''
					}
          ${
						theme === '3' && type === 'action'
							? `bg-theme-03-action-key-100 text-theme-03-copy-100 text-[16px]`
							: ''
					}
          ${
						theme === '3' && type === 'equals'
							? `bg-theme-03-equals-key-100 text-theme-03-copy-300 text-[16px]`
							: ''
					}
          
          -translate-y-1 flex-col items-center justify-center rounded leading-none duration-300 ease-out hover:-translate-y-[6px] active:-translate-y-[2px]`}
			>
				{type === 'operator' ? value.toLowerCase() : value.toUpperCase()}
			</span>
		</button>
	)
}

type NumberKey = {
	value: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.'
	onClick: (value: string) => void
}

const Number = ({ value, onClick }: NumberKey) => {
	return (
		<Key
			type='numeric'
			size='small'
			value={value}
			onClick={() => {
				onClick(value)
			}}
		/>
	)
}

type OperatorKey = {
	value: '+' | '-' | '/' | 'x'
	onClick: (value: string) => void
}

const Operator = ({ value, onClick }: OperatorKey) => {
	return (
		<Key
			type='operator'
			size='small'
			value={value}
			onClick={() => {
				onClick(value)
			}}
		/>
	)
}

type BasicKey = {
	onClick: () => void
}

const Reset = ({ onClick }: BasicKey) => {
	return <Key type='action' size='large' value='Reset' onClick={onClick} />
}

const Delete = ({ onClick }: BasicKey) => {
	return <Key type='action' size='small' value='Del' onClick={onClick} />
}

type EqualsKey = {
	displayValue: string
	onClick: (value: string, errorMessage: string) => void
}

const Equals = ({ onClick, displayValue }: EqualsKey) => {
	return (
		<Key
			type='equals'
			size='large'
			value='='
			onClick={() => {
				const result = utils.calculate(displayValue)

				if (!result.success) {
					return onClick(result.value, 'Invalid format')
				}

				return onClick(result.value, '')
			}}
		/>
	)
}

export default {
	Default: Key,
	Number,
	Operator,
	Reset,
	Delete,
	Equals,
}
