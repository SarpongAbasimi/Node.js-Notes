Readable Streams
In the previous exercise, we practiced reading the contents of entire files into our JavaScript programs. In more realistic scenarios,
data isn't processed all at once but rather sequentially, piece by piece, in what is know as a stream. 
Streaming data is often preferable since you don't need enough RAM to process all the data at once nor do you need to have all 
the data on hand to begin processing it.

One of the simplest uses of streams is reading and writing to files line-by-line. To read files line-by-line, we can use the .
createInterface() method from the readline core module. .createInterface() returns an EventEmitter set up to emit 'line' events:

Create an HTTP Server
Node was designed with back end development needs as a top priority. One of these needs is the ability to create web servers,
computer processes that listen for requests from clients and return responses. 
A Node core module designed to meet these needs is the http module. 
This module contains functions which simplify interacting with HTTP and streamline receiving and responding to requests.

The http.createServer() method returns an instance of an http.server. 
An http.server has a method .listen() which causes the server to "listen" for incoming connections. 
When we run http.createServer() we pass in a custom callback function (often referred to as the requestListener). 
This callback function will be triggered once the server is listening and receives a request.

Let's break down how the requestListener callback function works:

The function expects two arguments: a request object and a response object.
Each time a request to the server is made, Node will invoke the provided requestListener callback function, 
passing in the request and response objects of the incoming request.

Request and response objects come with a number of properties and methods of their own, and within the requestListener function, 
we can access information about the request via the request object passed in.
The requestListener is responsible for setting the response header and body.
The requestListener must signal that the interaction is complete by calling the response.end() method

