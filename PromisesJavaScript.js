//Constructing a Promise Object
//This is How I understand Promisses In JavaScript.

/*
A promise is like doing a house cleaning on a saturday morning.
Whiles You are playing music in the bacground , You are also sweeping the floor and
doing your washing with Your washing machine at the same time.

That is basicall a promise , You don't wait for your washing machine to finish your cloths
before You start cleaning the house , You perform these tasks at the same time !

Promises in Javascript has three states

1) Prending State - This is the initial state.
2) Resolved State - This is when a request is successful.
3) Rejected State - This is when a request is unsuccessful.

we use promise by creating calling - new Promise()
which is a constructor. The constructor takes a function parametore
called the executor.This function in turn takes two parameters namely
1)resolve
2)reject

The executor function has two function parameters, usually referred to as the resolve() and reject() functions. 
The resolve() and reject() functions aren't defined by the programmer.
When the Promise constructor runs, JavaScript will pass its own resolve() and reject() functions into the executor function.

*/

// Promise Exsample one
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);


// example2 

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const { sunglasses }=inventory;
 const myExecutor=(resolve,reject)=>{
return inventory.sunglasses > 0 ?resolve('Sunglasses order processed.') :reject('That item is sold out.')
 }
   
 const orderSunglasses=()=>{
   return( new Promise(myExecutor));
 }
 
 const orderPromise = orderSunglasses()
 
 console.log(orderPromise);

//**************************************************** The .then() method in Promisese *********************************//

/* 
We are not always sure whether a promise will be resolved or rejected but we are sure that
the promise will settle.
Base on the success or failure of a promise , we might want to execute a task.
This is when the .then() method comes in to play.
This  method takes those callback functions as parameters known as handlers

The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

Note that a promise can be invoked with
1) One handler
2) Both handlers
3)Neither of the handlers

*/

// Example of a promise and .then method 
/*
Note that the value passed to the
 onFulfilled() and onRejected() are the strings passed
 to resolve & reject in line 108.. These values are automatically passed by the promise to the .then() method.
 No that the can be change.. 
 for example I come have said alert for onFulfilled  alert(' succes') and that would have be dislayed insted of  'Yes yes'   
*/
const inventory = {
  sunglasses: 1,
  pants: 1088,
  bags: 1344
};


const { sunglasses } =inventory;

const onFulfilled = (value)=>{
alert(value)
}

const onRejected=(value)=>{
alert(value)
}

const checkInventory= new Promise((resolve,reject)=>{
return sunglasses > 100 ? resolve('Yes yes'):reject('No no')
}).then(onFulfilled,onRejected);


const myAction = ()=>{
return checkInventory();
}
myAction();

//*********************************************************** .catch ****************************************************************

/*
Remember, .then() will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. 
This implementation allows us to separate our resolved logic from our rejected logic. 
Instead of passing both handlers into one .then(), we can chain a second .then() with a failure handler to a first .then() 
with a success handler and both cases will be handled.


Since JavaScript doesn't mind whitespace, 
we follow a common convention of putting each part of this chain on a new line to make it easier to read. 
To create even more readable code, we can use a different promise function: .catch().
The .catch() function takes only one argument, onRejected. In the case of a rejected promise, 
this failure handler will be invoked with the reason for rejection. 
Using .catch() accomplishes the same thing as using a .then() with only a failure handler
*/

const inventory = {
  sunglasses: 1,
  pants: 1088,
  bags: 1344
};


const { sunglasses } =inventory;

const onFulfilled = (value)=>{
alert(value)
}

const onRejected=(value)=>{
alert(value)
}

const checkInventory= new Promise((resolve,reject)=>{
return sunglasses > 100 ? resolve('Yes yes'):reject('No no')
}).then(onFulfilled)
	.catch(onRejected);


const myAction = ()=>{
return checkInventory();
}

myAction();



//************* PROMISE REVIEW ***********************
/*
1)Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
2)Promises can be in one of three states: pending, resolved, or rejected.
3)A promise is settled if it is either resolved or rejected 
4)We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
5)setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
6)We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
7)use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
8)Promise composition enables us to write complex, asynchronous code that's still readable. We do this by chaining multiple .then()'s and .catch()'s.
9)To use promise composition correctly, we have to remember to return promises constructed within a .then().
10)We should chain multiple promises rather than nesting them.
11)To take advantage of concurrency, we can use Promise.all().


*/
