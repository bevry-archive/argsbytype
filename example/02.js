var myFunction = function(){
	// Extract our arguments
	var args = require('../')(arguments)
	var name = args.strings[0]
	var options = args.objects[0]
	var concurrency = args.numbers[0]

	// Do our stuff
	console.log({
		name: name,
		options: options,
		concurrency: concurrency
	})
}

myFunction('sup', {a:1}, 123)  // {name: 'sup', options:{a:1}, concurrency: 123}
myFunction({a:1}, 123, 'sup')  // {name: 'sup', options:{a:1}, concurrency: 123}
myFunction(123, 'sup', {a:1})  // {name: 'sup', options:{a:1}, concurrency: 123}