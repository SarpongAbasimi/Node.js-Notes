//concepts to keep in mind when working with Node and Express
//Node "res.write" is low level when working with Express, its res.send
// To set up your virtual environment use dotenv
//create a file called .env and store in this file your environmentall variables
//To access the enviroment viriable use a.set('name of the environment variable')
//Nodemon -> Remember to download that for hot reload


//initialize Express

const express = require('express');
const dotenv = require('dotenv').config;
const process = require('process');
const handlebar = require('handlebar');

app=express()
app.set(port,process.env.(name of the env variable)|| 3000);

app.get('/',(req,res)=>{
  res.send('what You want to send goes here')
});


// if  there is no variable port 3000 will be used since is was specified in line 17.
// The listen can take a second argument which is a callback function.
app.listen(app.get('port'),()=>{
    console.log(`Listening on port ${app.get('port')}`)
});

// To add Static Files
//In order to add static file set express.static to the path on the file.
//Remembet that /static will have to be in your url path when requesting for static files.
app.use('/static', express.static(path.join(__dirname ,'static')));


//Express alllows for various templating engines.
//Jade , pug, express handle-bar and more.
// When setting the templating engine use
app.engine('handlebars') //You can set other parameters
//we can dell express where to find the layout('base template').
//defaultLayout is the name of the  base template
//extensionName if the name of the base template extension
//layoutDir is the layout directory
app.engine('handlebars',handlebars({defaultLayout :'layout',extensionName:'handlebars',layoutDir: __dirname + '/views/layouts/'}}))
app.set('view engine', 'handlebar')


//Express.Router
//An Express router provides a subset of Express methods. 
//To create an instance of one, we invoke the .Router() method on the top-level Express import.
//To use a router, we mount it at a certain path using app.use() and pass in the router as the second argument.


//Express CRUD Example

const express =require('express');
const dotenv =require('dotenv').config();
const process = require('process');
const Joi = require('joi');


//create an instance of express
const app = express();

app.use(express.json());


//Array of course
const courses = [
  {id: 1 ,name:'course1'},
  {id: 2 ,name:'course2'},
  {id: 3 ,name:'course3'},
];

app.get('/',(req,res,next)=>{
    res.send('Hey welcome');
})

//get request of all courses
app.get('/api/courses',(req,res,next)=>{
    res.send(courses);
})

//get a single course
app.get('/api/courses/:id',(req,res,next)=>{
    const course = courses.find((ele)=> ele.id === parseInt(req.params.id));
    if(course){
        res.send(course)
    }else{
        res.status(404).send('Sorry could not find the given ID');
    }
})

//Post to the course
app.post('/api/courses',(req,res)=>{
    const schema={
        name: Joi.string().min(3).required()
    }
    const result =Joi.validate(req.body,schema)
    if(result.error){
        res.status(400).send(`Error : ${result.error}`);
        return;
    }
    const course = {
        id:courses.length +1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

//Update the course
app.put('/api/courses/:id',(req,res,next)=>{
    //Find if the course actually exits
    //If it doesn't exit return a 404 'Not Found'
    const course = courses.find((ele)=> ele.id === parseInt(req.params.id));
    if(course){
        res.send(course)
    }else{
        res.status(404).send('Sorry could not find the given ID');
    }

    //Validate 
    //If invalid return 400 -Bad Request
    const schema={
        name: Joi.string().min(3).required()
    }

    const result =Joi.validate(req.body,schema)
    if(result.error){
        res.status(400).send(`Error : ${result.error}`);
        return;
    }
    //update
    course.name = req.body.name;
    res.send(course);

})


app.listen(process.env.PORT,()=>{
    console.log(`Listening an Port ${process.env.PORT}`);
})







