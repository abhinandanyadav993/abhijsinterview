// https://medium.com/@halfcircassian/constructor-functions-in-javascript-101-a7123efbc0b6
function Dog(name, breed, age, weightinKgs){
    // this ={}  this line to implies when use new keyword
    this.name =name;
    this.breed= breed;
    this.age =age;
    this.weightinKgs = weightinKgs;
    this.eat = function(){
        console.log("Chomp");
    }
    this.bark=  ()=>{
        console.log("Woof!")
    }


}

const dogTheMerry = new Dog("Marley", "pit",12,8 );

console.log(dogTheMerry.eat());


// Q2


function Test() {
    this.value = 42;
    return { custom: 100 };
}
const obj = new Test();
console.log(obj.value); // ?
console.log(obj.custom); // ?
console.log(obj)

// Q3 What if You Call a Constructor Without new?

function Animal(type){
    this.type = type
}

const animal = Animal("Buffalo");
console.log(type);

console.log(animal)

// Q4:

// const Test1 = () => {
//     this.value = 5;
// };
// const t = new Test1();


// Q5: static method
function Person(name) {
    this.name = name;
}
Person.sayHello = function() {
    return 'Hello!';
};
console.log(Person.sayHello()); // ?
const p = new Person('Alice');
// console.log(p.sayHello()); // ?

// Q5
function Test2() {
    this.a = 1;
    return 2;
}
const t = new Test2();
console.log(t); 

// Q6

class Secret {
    code = 123;
    getCode() {
        return this.code;
    }
}
const s = new Secret();
console.log(s.getCode()); // 123
console.log(s.code); // ❌ SyntaxError


