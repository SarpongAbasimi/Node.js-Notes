/*
This is how I understand React.js

In React jsx , which is a javascript extension is used.
A good example is const name = <span> Hello World</span> 
const name is javascript whiles (<span> Hello World</span> ) is the jsx part.

Variables can be injectd into the jsx systax ,
these variable are injected into them  between {}.

Attributes can be passed to the jxs systax just like normal html.
However, it is important to not that attributes such as
class and event names are slightly different in react.

class = className
onclick = onClick 

see react documentation for further detail.

React uses something called the virtual dom,this what makes it very fast.
To cut the long story short , at the point of rendering the DOM elements,
react takes a snapshot of the Dom and then compares it each time a change is made.
If a change is made, only that part that the change was made is updated.

*/

//Creating a react component.

import React form 'react';
import ReactDOM from 'react-dom';

/*
what is going on ?.

Well we imported a react library which is an object with properties
and stored it inside React. This will enable us to use React.(property of react).
The same thing applies to the ReactDOM variable.
ReactDOM allows us to manipulate the DOM.

*/


//We created a class component called MyHello and inherited from React.component
//React.component is like a mother that gives birth to a component.
//Then there is a render methed which is a method inside of the class component
//The render method spits out a jsx which says Hello World
//ReactDOM. render takes two argument , the first one is a jxs or a component and the second argument is who to render the jsx
//When  the ReactDOM.render is called , it looks to the MyHello class component and verify if it has a render method
//If it does it calls the render method and output the jsx to the specified locatio.

class MyHello extends React.component{

render(){
    return <h1> Hello World </h1>;
  }
}

ReactDOM.render(<MyHello/>,document.getElementById('where to render');



//  How Props Work In React  
/*
In React information is passed to components through props.
If this.props is logged to to console, it will display and object.
Depending on whether a prop has been passed to the component or not , it might have
key value pairs or it might be empty.

Note.
1)Prop can be passed from one component to another component
2)Events can be passed as props
3)And We can decide what to render to the screen based on a prop.

*/

//*********************************************************** IMPORTANT NOTE
/*  
A React component should use props to store information that can be changed, but can only be changed by a different component.
A React component should use state to store information that the component itself can change.


A stateless component can change the state of the parent component using event handlers.
When the event handler is called by the child component(stateless) will mutate th state of the parent 

In the example Below

When a user selects a new dropdown item, it will invoke changeName, but it won't pass the correct argument! 
Instead of passing a new name, it will pass an event object, as all event listeners do.

This is a common problem when passing down an event handler in React! The solution is to define another function.
This new function should take an event object as an argument, 
extract the name that you want from that event object, and then call the event handler, passing in the extracted name!
*/
import React from 'react';

export class Child extends React.Component {
  
  constructor(props){
    super(props);
    
   this.handleChange=this.handleChange.bind(this)
  }
  
  handleChange(e){
    const name=e.target.value;
    this.props.onChange(name);
  }
  
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}


//*************** Parent Component  ***************//
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };
    this.changeName=this.changeName.bind(this);
  }
  
  changeName(newName){
    this.setState({name:newName});
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />
  }
}
  

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);


/* 


// ---------------------- Life cycle Methods In React
Lifecycle methods are methods that get called at certain moments in a component's life.

There are three main phases of lifecycle hooks.
1)Mounting
2)updating
3)Unmounting

The Mounting lifecycle hook can be divided into 3 parts.
componentWillMount - When You want something to happen once before the component is rendered to the screen this is where to put it.
it is important to not that componentWillMount is only called when a component renders for the first time.

render - Render is a lifecycle method that spits jsx to the screen.it belongs to two categories: mounting lifecycle methods, and updating lifecycle methods. 

componentDidMount - This gets used a lot in React applications. This is called once the HTML has rendered on the screen.
ComponentDidMount is the perfect place setTimeOut ,setInterval , talk to external API etc.



updating --
Updating does not happen the first time a component instance is rendered to the screen.
It happens the second time only if the component receives props.
The updating phase  can be grouped into 5 main parts
1)componentWillReceiveProps
2)shouldComponentUpdate
3)componentwillupdate
4)render
5)componentDidUpdate


componentWillReceiveProps get automatically passed an argument called 'nextProps'
*/

import React from 'react';

export class Example extends React.Component {
  componentWillReceiveProps(nextProps) {
    alert("Check out the new props.text that "
    	+ "I'm about to get:  " + nextProps.text);
  }

  render() {
    return <h1>{this.props.text}</h1>;
  }
}


// The first render won't trigger
// componentWillReceiveProps:
ReactDOM.render(
	<Example text="Hello world" />,
	document.getElementById('app')
);


// After the first render, 
// subsequent renders will trigger
// componentWillReceiveProps:
setTimeout(() => {
	ReactDOM.render(
		<Example text="Hello world" />,
		document.getElementById('app')
	);
}, 1000);





