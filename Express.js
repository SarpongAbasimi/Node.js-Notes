//concepts to keep in mind when working with Node and Express
//Node "res.write" is low level when working with Express, its res.send
// To set up your virtual environment use dotenv
//create a file called .env and store in this file your environmentall variables
//To access the enviroment virable use a.set('name of the environment variable')
//Nodemon -> Remember to download that for hot reload


//initialize Express

const express = require('express');
const dotenv = require('dotenv').config
const process = require('process')

app=express()
app.set(port,process.env.(name of the env variable)|| 3000)

app.get('/',(req,res)=>{
  res.send('what You want to send goes here')
});

//Since the port was set to the environment variable , the get the variable and use it as the port.
// if  there is no variable port 3000 will be used.
app.listen(app.get(port))
