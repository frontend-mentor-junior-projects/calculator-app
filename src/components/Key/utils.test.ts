import { describe } from 'vitest'

import utils from './utils'

describe('Keys', () => {
	const { calculate } = utils

	it('calculates 5+5', () => {
		const result = calculate('5+5')

		expect(result.value).equal('10')
	})

	it('calculates 5x5', () => {
		const result = calculate('5x5')

		expect(result.value).equal('25')
	})

	it('calculates 5/5', () => {
		const result = calculate('5/5')

		expect(result.value).equal('1')
	})

	it('calculates 5-5', () => {
		const result = calculate('5-5')

		expect(result.value).equal('0')
	})

	it('calculates 5+5-10', () => {
		const result = calculate('5-5')

		expect(result.value).equal('0')
	})

	it('calculates 5x5-10', () => {
		const result = calculate('5x5-10')

		expect(result.value).equal('15')
	})

	it('calculates 5-5x10', () => {
		const result = calculate('5-5x10')

		expect(result.value).equal('-45')
	})

	it('calculates 5-10+20x45/9', () => {
		const result = calculate('5-10+20x45/9')

		expect(result.value).equal('95')
	})

	it('does not calculate 5-', () => {
		const result = calculate('5-')

		expect(result.value).equal('5-')
	})
})
