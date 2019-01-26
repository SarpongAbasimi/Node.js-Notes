//How To Use Mocha
// Install mocha with npm npm install --save-dev mocha

const myString = (input)=>{
    let myArray= []
     
  return myArray.concat(input).length;
}
module.exports = myString;

//In a second file
//Mocha allows you to use any assertion library
//Assertion chai , expect.js,better-assert , should.js

const assert = require('assert');
const app = require('./f');

describe('App',function(){
    const myArray = ['hello',5,7,8];
    it('Must return the lenght of an array',function(){
            assert.equal(app(myArray),5);
    })
})

//Testing Promise with Jest 

//uppercase.js
const uppercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string')
      return
    }
    resolve(str.toUpperCase())
  })
}
module.exports = uppercase

//uppercase.test.js
const uppercase = require('./uppercase')
test(`uppercase 'test' to equal 'TEST'`, () => {
  return uppercase('test').then(str => {
    expect(str).toBe('TEST')
  })
})


