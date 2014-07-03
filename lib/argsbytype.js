"use strict";
var typechecker = require('typechecker')
module.exports = function(args){
	// convert argument objects to array
	if ( Array.isArray(args) === false )  args = Array.prototype.slice.call(args)
	// extract types
	var result = {
		arrays:     [],
		booleans:   [],
		dates:      [],
		errors:     [],
		functions:  [],
		nulls:      [],
		numbers:    [],
		regexps:    [],
		strings:    [],
		objects:    [],
		undefineds: []
	}
	args.forEach(function(arg){
		var type = typechecker.getType(arg)
		result[type+'s'].push(arg)
	})
	return result
}