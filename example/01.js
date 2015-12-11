/* eslint prefer-reflect:0, no-var:0, object-shorthand:0, no-magic-numbers:0, no-console:0 */
'use strict'
function myFunction () {
	// Specify our argument variables
	var name
	var options
	var concurrency

	// Extract our arguments
	Array.prototype.slice.call(arguments).forEach(function (arg) {
		// And update them based on the type
		switch ( typeof arg ) {
			case 'string':
				name = arguments[0]
				break
			case 'object':
				options = arguments[0]
				break
			case 'number':
				concurrency = arguments[0]
				break
			default:
				// no need to do anything here, as it is just example code
				break
		}
	})

	// Do our stuff
	console.log({
		name: name,
		options: options,
		concurrency: concurrency
	})
}

myFunction('sup', {a: 1}, 123)  // {name: 'sup', options:{a: 1}, concurrency: 123}
myFunction({a: 1}, 123, 'sup')  // {name: 'sup', options:{a: 1}, concurrency: 123}
myFunction(123, 'sup', {a: 1})  // {name: 'sup', options:{a: 1}, concurrency: 123}
