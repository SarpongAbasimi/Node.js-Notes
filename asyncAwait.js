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

