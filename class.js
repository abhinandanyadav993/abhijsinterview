
// Q1: Method overriding
class Animal {
    constructor(name){
        this.name= name;
    }
     speak(){
        console.log(`${this.name} can speak`)
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} bark.`)
    }

}

class Labrador extends Dog {
    speak(){
        console.log(`${this.name} can bark laudly`);
    }
}

const dog = new Labrador("Max");
dog.speak()


// Q2 super in method vs constructor

class Parent {
    constructor() {
        console.log("Parent constructor");
    }
    greet(){
        console.log("greet from parent constructor");
    }
}

class Child extends Parent {
    constructor(){
        super();
        console.log("child constructor");
    }
    greet(){
        super.greet()
        console.log("greet from child")
    }
}

const child = new Child();
child.greet();

// Q3:Customizing instanceof Behavior
class EvenNumberChecker {
    static[Symbol.hasInstance](instance){
        return Number(instance) %2 ===0;
    }
}

console.log(2 instanceof EvenNumberChecker)


