/*:
	@module-configuration:
		{
			"packageName": "extract-parameter-list-from-function",
			"fileName": "extract-parameter-list-from-function.js",
			"moduleName": "extractParameterListFromFunction",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/extract-parameter-list-from-function.git",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
	@end-include
*/
var extractParameterListFromFunction = function extractParameterListFromFunction( method ){
	/*:
		@meta-configuration:
			{
				"method:required": "function"
			}
		@end-meta-configuration
	*/

    var rawFunctionString = method.toString( );

    if( parameterPattern.test( rawFunctionString ) ){
        var parameterString = rawFunctionString.match( parameterPattern );

        var parameterList = parameterString.split( /,\s*/ );

        return parameterList;

    }else{
        return [ ];
    }
};

var parameterPattern = /function\s+[a-z][a-zA-Z]+\(\s+(.+?)?\s+\)/g;

( module || { } ).exports = extractParameterListFromFunction;