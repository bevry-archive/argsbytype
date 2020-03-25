/* eslint prefer-rest-params:0, no-undefined:0, no-console:0 */
'use strict'

function myFunction() {
	// Extract our arguments
	const args = require('../')(arguments)
	const name = args.strings[0]
	const options = args.objects[0]
	const concurrency = args.numbers[0]

	// Do our stuff
	console.log({
		name,
		options,
		concurrency,
	})
}

myFunction('sup', { a: 1 }, 123) // {name: 'sup', options:{a: 1}, concurrency: 123}
myFunction({ a: 1 }, 123, 'sup') // {name: 'sup', options:{a: 1}, concurrency: 123}
myFunction(123, 'sup', { a: 1 }) // {name: 'sup', options:{a: 1}, concurrency: 123}
