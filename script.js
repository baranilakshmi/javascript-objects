const employee = {

name: 'Barani',
idno: 703,
salary: 60000,


result: function () {

let surename = "lakshmi"
console.log(`${this.name} ${surename} is working on accenture`);

}

}

console.log(typeof employee);

console.log(employee.idno);
//or
console.log(employee["idno"]);
console.log(employee.name);

console.log(typeof employee.salary);
console.log(typeof employee.name);
console.log(typeof employee.result);

employee.result();

function Industry(){

this.name = "Retail trade",
this.value = 9777.47,
employees = 12

}

const industry = new Industry();
const industry2 = new Industry();

console.log(industry);
console.log(industry2);


function People(name,age,address,gender) {

this.name = name,
this.age = age,
this.address = address,
this.gender = gender,

this.info = function() {

return((`${this.name} is ${this.age} year old. living in ${this.address} ${this.gender}`))

}

}
const people1 = new People ('suresh', 25,'kk nagar,tambaram','male');
const people2 = new People ('stephen',28,'club street,bangalore','male');
const people3 = new People ('Anna',23,'singapore','female');


console.log(people1);
console.log(people2);
console.log(people3);

console.log(people1.info());
console.log(people3.name);

let man = "sai";
console.log(man);

let men = {
man: 'moni'
}

console.log(men);

function Student () {

this.name = "vinitha"

}

let student1 = new Student ();
let student2 = new Student ();

//console.log(student1);
//console.log(student2);

console.log(student1,student2);

student1.age = 18;

console.log(student1.age);

student2.name = "safha";
console.log(student2);

student1.greet = function () {

    return ("hey");
}
console.log(student1.greet());
//console.log(student2.greet());

Student.prototype.gender = "female";
Student.prototype.age = 23;

console.log(student1.gender);
console.log(student2.gender);

console.log(student2.age);

let p = new Object("hello");
let q = new String("keerthana");
let r = new Number(200);
let s = new Boolean(false);

console.log(p,q,r,s);

const person = {

    firstname: "kavitha",

    get value() {

        return this.firstname
    }
}

console.log(person.firstname);
console.log(person);
console.log(person.value);


const friend  = {

firstname: "nirai",
age: 17

}

console.log(friend);
console.log(friend.firstname);
console.log(friend.age);

const country = {

name: "India",

set changename(newname) {

    this.name = newname;
}

}
console.log(country.name);
country.changename = "Australia";
console.log(country.name);

const cycle = {
company: 'Atlas'

}
Object.defineProperty(cycle, "getcompanyname", {
get: function(){
    return this.company;
}

})

Object.defineProperty(cycle,"changecompanyname",{

    set: function (value) {
        this.company = value;
    }
})

console.log(cycle.company);

cycle.changecompanyname = "butterfly";
console.log(cycle.company);