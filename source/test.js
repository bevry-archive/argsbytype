/* eslint prefer-rest-params:0, no-undefined:0, no-console:0 */
'use strict'

// Import
const argsbytype = require('./')
const deepEqual = require('assert-helpers').deepEqual,
	kava = require('kava')

// Tests
kava.describe('argsbytype', function(describe, it) {
	const now = new Date()
	const err = new Error('sup')
	function cb() {}
	const input = [
		1,
		'two',
		3,
		'four',
		{ a: 'b' },
		/c/,
		null,
		false,
		true,
		undefined,
		now,
		[1, 2, 3],
		err,
		cb
	]
	const expectedResult = {
		numbers: [1, 3],
		strings: ['two', 'four'],
		objects: [{ a: 'b' }],
		regexps: [/c/],
		nulls: [null],
		booleans: [false, true],
		undefineds: [undefined],
		dates: [now],
		arrays: [[1, 2, 3]],
		errors: [err],
		functions: [cb]
	}

	it('should provide the expected output when given an array', function() {
		const actualResult = argsbytype(input)
		deepEqual(actualResult, expectedResult, 'results are as expected')
	})

	it('should provide the expected output when given arguments', function() {
		function fn() {
			const actualResult = argsbytype(arguments)
			deepEqual(actualResult, expectedResult, 'results are as expected')
		}
		fn(...input)
	})
})
