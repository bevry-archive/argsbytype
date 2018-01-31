'use strict'

// Import
const typechecker = require('typechecker')

// Define
module.exports = function argsbytype (args) {
	// convert argument objects to array
	if (Array.isArray(args) === false) args = Array.prototype.slice.call(args)

	// extract types
	const result = {
		arrays: [],
		booleans: [],
		dates: [],
		errors: [],
		functions: [],
		nulls: [],
		numbers: [],
		regexps: [],
		strings: [],
		objects: [],
		undefineds: []
	}
	args.forEach(function (arg) {
		const type = typechecker.getType(arg)
		result[type + 's'].push(arg)
	})
	return result
}
