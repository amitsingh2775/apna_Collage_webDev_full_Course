
// fectory function
function PersonMaker(name,age){
    const person={
        name: name,
        age: age,
        talk(){
            console.log(`hello i am ${this.name}`);
        },
   
    };
    return person;
}

// new operator ka use kar object create karna it is a better way 

// cunstructor function-> it doest return anything & always start with capital letter

// function Person(name,age){
//     this.name=name;
//     this.age=age;
  
//      Person.prototype.talk1=function(){
//         console.log(`hello ji ${this.name}`)
//      }
// }
// // how  can i access
//  let p1=new Person("amit",19)
 //console.log(p1);
//  console.log(p1.name);
//  console.log(p1.talk1());

 // best way to create an object using classes

//  class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`hii i am ${this.name}`);
//     }
//  }
//  let p=new Student("amit",19);
//  console.log(p);
//  console.log(p.talk());
//  console.log(p.age);


 // inheritance
 class Person{
    constructor(name,age){
        console.log("person calss constructor");
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hii i am ${this.name}`);
    }
 }
 
 class Student extends Person{
    constructor(name,age,marks){
        console.log("student calss constructor");
        super(name,age);//parent calss constructor being called
        this.marks=marks
    }
 }
 class Teacher extends Person{
    constructor(name,age,sllybus){
        console.log("teacher calss constructor");
        super(name,age);//parent calss constructor being called
        this.sllybus=sllybus
    }
 }

 let stu=new Student("amit",19,90);
 console.log(stu);
 console.log(stu.marks);
 console.log(stu.talk());

 let tech=new Teacher("ramlal",55,"math")
 console.log(tech);
 console.log(tech.sllybus);
 console.log(tech.talk());
