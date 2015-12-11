/* eslint prefer-reflect:0, no-var:0, prefer-spread:0, key-spacing:0, object-shorthand:0, no-magic-numbers:0, no-undefined:0 */
'use strict'

// Import
var deepEqual = require('assert-helpers').deepEqual,
	joe = require('joe')

// Tests
joe.describe('argsbytype', function (describe, it) {
	var argsbytype = require('../')
	var now = new Date()
	var err = new Error('sup')
	function cb () {}
	var input = [1, 'two', 3, 'four', {a: 'b'}, /c/, null, false, true, undefined, now, [1, 2, 3], err, cb]
	var expectedResult = {
		numbers:     [1, 3],
		strings:     ['two', 'four'],
		objects:     [{a:'b'}],
		regexps:     [/c/],
		nulls:       [null],
		booleans:    [false, true],
		undefineds:  [undefined],
		dates:       [now],
		arrays:      [[1, 2, 3]],
		errors:      [err],
		functions:   [cb]
	}

	it('should provide the expected output when given an array', function () {
		var actualResult = argsbytype(input)
		deepEqual(actualResult, expectedResult, 'results are as expected')
	})

	it('should provide the expected output when given arguments', function () {
		function fn () {
			var actualResult = argsbytype(arguments)
			deepEqual(actualResult, expectedResult, 'results are as expected')
		}
		fn.apply(null, input)
	})
})
