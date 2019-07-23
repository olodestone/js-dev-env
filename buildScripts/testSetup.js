//This file isn't transpiled, so must use CommonJS amd ES5

//Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that Mocha doesnt understand.
require.extensions['.css'] = function() {};
