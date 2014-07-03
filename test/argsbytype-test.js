"use strict";
// Import
var expect = require('chai').expect,
	joe = require('joe')

// Tests
joe.describe('argsbytype', function(describe,it){
	var argsbytype = require('../')
	var now = new Date()
	var err = new Error('sup')
	var cb = function(){}
	var input = [1, 'two', 3, 'four', {a:'b'}, /c/, null, false, true, undefined, now, [1,2,3], err, cb]
	var expectedResult = {
		numbers:     [1, 3],
		strings:     ['two', 'four'],
		objects:     [{a:'b'}],
		regexps:     [/c/],
		nulls:       [null],
		booleans:    [false, true],
		undefineds:  [undefined],
		dates:       [now],
		arrays:      [[1,2,3]],
		errors:      [err],
		functions:   [cb]
	}

	it("should provide the expected output when given an array", function(){
		var actualResult = argsbytype(input)
		expect(actualResult).to.deep.equal(expectedResult)
	})

	it("should provide the expected output when given arguments", function(){
		var fn = function(){
			var actualResult = argsbytype(arguments)
			expect(actualResult).to.deep.equal(expectedResult)
		}
		fn.apply(null, input)
	})
})