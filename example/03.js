/* eslint prefer-reflect:0, no-var:0, object-shorthand:0, no-magic-numbers:0, no-console:0 */
'use strict'

// agnostic setTimeout
function wait () {
	var args = require('../')(arguments)
	return setTimeout(args.functions[0], args.numbers[0])
}

// javascript style
wait(function () {
	console.log('awesome 1')
}, 1000)

// coffeescript style
wait(2000, function () {
	console.log('awesome 2')
})
