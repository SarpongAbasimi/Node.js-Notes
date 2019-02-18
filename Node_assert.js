/*
assert.ok
As a Node module, assert can be imported at the top of your files with
The functions in the assert library compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more expressive test suite.
assert.ok(6 - 1 === 5);

In this case 6 - 1 === 5 evaluates to true, so no error is thrown.
If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console

*/
const assert = require('assert')
