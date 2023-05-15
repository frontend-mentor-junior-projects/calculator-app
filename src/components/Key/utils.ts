const operate = (
	result: (string | number)[],
	operator: string,
	calculate: (a: number, b: number) => number
) => {
	let newResult = [...result]
	let addOperator = newResult.indexOf(operator)

	while (addOperator !== -1) {
		const a = Number(newResult[addOperator - 1])
		const b = Number(newResult[addOperator + 1])

		const calculation = calculate(a, b)
		const before = newResult.slice(0, addOperator - 1)
		const after = newResult.slice(addOperator + 2)

		newResult = [...before, calculation, ...after]

		addOperator = newResult.indexOf(operator)
	}

	return newResult
}

const calculate = (displayValue: string) => {
	const OPERATORS = ['+', '-', '/', 'x']

	const isInvalidFormat = OPERATORS.some((operator) => {
		return operator === displayValue.slice(-1)
	})

	if (isInvalidFormat) {
		return { value: displayValue, success: false }
	}

	const operatorsAndOperands = []
	let tempOperand = ''

	let index = 0
	while (index < displayValue.length) {
		const currentChar = displayValue[index]

		const isOperator = OPERATORS.find((operator) => {
			return operator === currentChar
		})
		const isNumber = !isOperator

		if (isNumber) {
			tempOperand += currentChar
		}

		if (isOperator) {
			operatorsAndOperands.push(Number(tempOperand))
			tempOperand = ''

			operatorsAndOperands.push(currentChar)
		}

		if (displayValue.length - index === 1) {
			operatorsAndOperands.push(Number(tempOperand))
			tempOperand = ''
		}

		index += 1
	}

	let result = [...operatorsAndOperands]

	while (result.length > 1) {
		/* Multiply */
		result = [
			...operate(result, 'x', (a, b) => {
				return a * b
			}),
		]

		/* Divide */
		result = [
			...operate(result, '/', (a, b) => {
				return a / b
			}),
		]

		/* Subtract */
		result = [
			...operate(result, '-', (a, b) => {
				return a - b
			}),
		]

		/* Add */
		result = [
			...operate(result, '+', (a, b) => {
				return a + b
			}),
		]
	}

	return { value: String(result[0]), success: true }
}

export default {
	calculate,
}
