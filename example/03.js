/* eslint prefer-rest-params:0, no-undefined:0, no-console:0 */
'use strict'

// agnostic setTimeout
function wait() {
	const args = require('../')(arguments)
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
