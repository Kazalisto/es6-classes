class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greeting(){
        return `Hello there ${this.firstname} ${this.lastname}`
    }

    getsMarried(newLastName){
        this.lastname = newLastName;
    }
  }  

const mary = new Person('Mary', 'Jenkins')
console.log(mary.greeting())
mary.getsMarried('Thomas');
console.log(mary.greeting())