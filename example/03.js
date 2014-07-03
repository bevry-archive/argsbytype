// agnostic setTimeout
var wait = function(){
	var args = require('../')(arguments)
	return setTimeout(args.functions[0], args.numbers[0])
}

// javascript style
wait(function(){
	console.log('awesome 1')
}, 1000)

// coffeescript style
wait(2000, function(){
	console.log('awesome 2')
})