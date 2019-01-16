/*
Classes are templates for objects.
Javascript calls a constructor method when we create a new instance of a class.
Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
We use the extends keyword to create a subclass.
The super keyword calls the constructor() of a parent class.
Static methods are called on the class, but not on instances of the class.
*/


//HospitalEmployee is the parent class that all other class inherit from
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20; // the ._ before a property name is a convention to say that is must not be altered.
  }
  
  get name() { //getter function.It is conventional to not call properties directly
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  
  static generatePassword(){
    return(Math.floor(Math.random()*10000));
  }
}

// When a class inherits from another call it has access to all the method of the parent class
//calling super and passing the name property to it is a way of telling Javascript to use the parent calls constructor to call the name.
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);                      
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
