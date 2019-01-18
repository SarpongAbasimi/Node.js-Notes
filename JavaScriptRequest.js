/*
There are various ways to communicate with
external API now adays in Javascript.
At first it was "Ajax request" but now thats to ES6 and ES7-8
We have the fetch() method and the asyn await method.


It is important to know that the fetch method takes one compulsory 
argument in a get request which when resolved returns a promise.
*/

//Traditional ajax request example

const xhr = new XMLHttpRequest();
xhr.responseType='json';

xhr.onreadyState = () =>{
    if(xhr.readyState === XMLHttpRequest.Done){
         return xhr.response
    }
}

xhr.open('GET',url);
xhr.send();


//ES6 introduced the fetch method.
//When the data is fetched there can be two possibilities
//Either the fetch query is resolved or rejected.


fetch('https://api-to-call.com/endpoint')
.then((response)=>{
  if(response.ok){
    return response.json()
  }
  throw new Error('Request failed!');
},(networkError)=>{
  console.log(networkError.message);
}).then((jsonResponse)=> jsonResponse);



//Using async await

const getData = async ()=>{
try{

const fetchInfo = await fetch(url);
  if(if fetchInfo.ok){
      const waitForJsonFormat = await response.json()
      return waitForJsonFormat
  }
  throw new Error('Error')
 };
 
 catch(error){
    Error Message;
 }
  
}


