/*
The async keyword is used to write functions that handle asynchronous actions. 
We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function

*/

//How is it used ?

async function myFunc() {
  // Function body here
};

const myAsync = async ()=>{
  //function body
};


//It must be noted that asyn always returns a promise.
//Becouse of this , it can be used with the .then method()

/*************************************** Example *****************************/
async function fivePromise() { 
  return 5;
}

fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })  // Prints 5

//async ... wait 
// await keyword halts the execution of an async function until a promise is no longer pending. 
/*
What is actually going on in the code below?
Well, In the example below myPromise() is a function
that returns a promise.

Within our async function, asyncFuncExample(), 
we use await to halt our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. 
Then we log resolvedValue to the console. We're able to handle the logic for a promise in a way that reads like synchronous code.
*/
async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}
asyncFuncExample();



