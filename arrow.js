// Example 1: Arrow function inside a regular function
function RegularFunction() {
    this.name = "RegularFunction";
    this.getName = () => {
        return this.name; // 'this' refers to the enclosing context (RegularFunction)
    };
}
const obj1 = new RegularFunction();
console.log(obj1.getName()); // Output: "RegularFunction"

// Example 2: Arrow function in a global context
const globalArrow = () => {
    return this; // 'this' refers to the global object (or undefined in strict mode)
};
console.log(globalArrow()); // Output: {} (in Node.js) or window (in browsers)

// Example 3: Arrow function inside an object
const obj2 = {
    name: "Object",
    getName: () => {
        return this.name; // 'this' does not refer to obj2, but to the global context
    },
};
console.log(obj2.getName()); // Output: undefined

// Example 4: Arrow function inside a class
class MyClass {
    constructor() {
        this.name = "MyClass";
    }
    getName = () => {
        return this.name; // 'this' refers to the instance of the class
    };
}
const obj3 = new MyClass();
console.log(obj3.getName()); // Output: "MyClass"

// Example 5: Arrow function as a callback
const obj4 = {
    name: "CallbackObject",
    printName: function () {
        setTimeout(() => {
            console.log(this.name); // 'this' refers to obj4 due to lexical scoping
        }, 1000);
    },
};
obj4.printName(); // Output: "CallbackObject"

// Example 6: Arrow function with parameters
const add = (a, b) => {
    return a + b; // Arrow function with parameters
};
console.log(add(2, 3)); // Output: 5
// Example 7: Arrow function with implicit return
const multiply = (a, b) => a * b; // Implicit return
console.log(multiply(2, 3)); // Output: 6
// Example 8: Arrow function with no parameters
const greet = () => "Hello, World!"; // No parameters
console.log(greet()); // Output: "Hello, World!"
// Example 9: Arrow function with default parameters
const greetWithDefault = (name = "Guest") => `Hello, ${name}!`; // Default parameter
console.log(greetWithDefault()); // Output: "Hello, Guest!"
// Example 10: Arrow function with rest parameters
const sum = (...numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0); // Rest parameters
};
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// Example 11: Arrow function with destructuring
const person = { name: "John", age: 30 };
const getNameAndAge = ({ name, age }) => {
    return `Name: ${name}, Age: ${age}`; // Destructuring
};
console.log(getNameAndAge(person)); // Output: "Name: John, Age: 30"
// Example 12: Arrow function with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2); // Using arrow function with map
console.log(doubled); // Output: [2, 4, 6, 8, 10]
// Example 13: Arrow function with filter
const evenNumbers = numbers.filter((num) => num % 2 === 0); // Using arrow function with filter
console.log(evenNumbers); // Output: [2, 4]
// Example 14: Arrow function with reduce
const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0); // Using arrow function with reduce
console.log(sumOfNumbers); // Output: 15
// Example 15: Arrow function with forEach
numbers.forEach((num) => {
    console.log(num); // Using arrow function with forEach
}); // Output: 1 2 3 4 5
// Example 16: Arrow function with sort
const sortedNumbers = numbers.sort((a, b) => a - b); // Using arrow function with sort
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
// Example 17: Arrow function with find
const foundNumber = numbers.find((num) => num > 3); // Using arrow function with find
console.log(foundNumber); // Output: 4
// Example 18: Arrow function with every
const allEven = numbers.every((num) => num % 2 === 0); // Using arrow function with every
console.log(allEven); // Output: false
// Example 19: Arrow function with some
const anyEven = numbers.some((num) => num % 2 === 0); // Using arrow function with some
console.log(anyEven); // Output: true
// Example 20: Arrow function with chaining
const chainedResult = numbers
    .filter((num) => num > 2)
    .map((num) => num * 2)
    .reduce((acc, num) => acc + num, 0); // Chaining array methods with arrow functions
console.log(chainedResult); // Output: 18
// Example 21: Arrow function with setTimeout
setTimeout(() => {
    console.log("This is a delayed message!"); // Using arrow function with setTimeout
}, 2000); // Output: "This is a delayed message!" after 2 seconds
// Example 22: Arrow function with setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`); // Using arrow function with setInterval
    if (count === 5) {
        clearInterval(intervalId); // Clear the interval after 5 counts
    }
}, 1000); // Output: Count: 1, Count: 2, ..., Count: 5 (every second)
// Example 23: Arrow function with promises
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!"); // Using arrow function with promises
        }, 2000);
    });
};
fetchData().then((data) => {
    console.log(data); // Output: "Data fetched!" after 2 seconds
});
// Example 24: Arrow function with async/await
const fetchDataAsync = async () => {
    const data = await fetchData(); // Using arrow function with async/await
    console.log(data); // Output: "Data fetched!" after 2 seconds
};
fetchDataAsync();
// Example 25: Arrow function with class methods
class Counter {
    constructor() {
        this.count = 0;
    }
    increment = () => {
        this.count++; // Using arrow function as a class method
    };
}
const counter = new Counter();
counter.increment();
console.log(counter.count); // Output: 1
// Example 26: Arrow function with class properties
class Person {
    name = "John Doe"; // Class property
    getName = () => {
        return this.name; // Using arrow function as a class property
    };
}
const personInstance = new Person();
console.log(personInstance.getName()); // Output: "John Doe"
// Example 27: Arrow function with class inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark = () => {
        console.log(`${this.name} says Woof!`); // Using arrow function in a subclass
    };
}
const dog = new Dog("Buddy");
dog.bark(); // Output: "Buddy says Woof!"
// Example 28: Arrow function with event listeners
const button = document.createElement("button");
button.textContent = "Click me!";
document.body.appendChild(button);
button.addEventListener("click", () => {
    console.log("Button clicked!"); // Using arrow function as an event listener
});
// Example 29: Arrow function with map and filter
const numbers2 = [1, 2, 3, 4, 5];
const squaredEvenNumbers = numbers2
    .filter((num) => num % 2 === 0)
    .map((num) => num * num); // Using arrow functions with map and filter
console.log(squaredEvenNumbers); // Output: [4, 16]
// Example 30: Arrow function with reduce and map
const totalSum = numbers2.reduce((acc, num) => acc + num, 0); // Using arrow function with reduce
const squaredNumbers = numbers2.map((num) => num * num); // Using arrow function with map
console.log(totalSum); // Output: 15
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// Example 31: Arrow function with filter and reduce
const evenSum = numbers2
    .filter((num) => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0); // Using arrow functions with filter and reduce
console.log(evenSum); // Output: 6
// Example 32: Arrow function with map and forEach
const doubledNumbers = numbers2.map((num) => num * 2); // Using arrow function with map
doubledNumbers.forEach((num) => {
    console.log(num); // Using arrow function with forEach
}); // Output: 2 4 6 8 10
// Example 33: Arrow function with filter and forEach
const oddNumbers = numbers2.filter((num) => num % 2 !== 0); // Using arrow function with filter
oddNumbers.forEach((num) => {
    console.log(num); // Using arrow function with forEach
}); // Output: 1 3 5
// Example 34: Arrow function with find and map
const foundNumber2 = numbers2.find((num) => num > 3); // Using arrow function with find
const foundNumberSquared = numbers2
    .filter((num) => num === foundNumber2)
    .map((num) => num * num); // Using arrow functions with find and map
console.log(foundNumberSquared); // Output: [16]
// Example 35: Arrow function with every and some
const allGreaterThanZero = numbers2.every((num) => num > 0); // Using arrow function with every
const anyGreaterThanThree = numbers2.some((num) => num > 3); // Using arrow function with some
console.log(allGreaterThanZero); // Output: true
console.log(anyGreaterThanThree); // Output: true
// Example 36: Arrow function with sort and map
const sortedNumbers2 = numbers2.sort((a, b) => a - b); // Using arrow function with sort
const sortedSquaredNumbers = sortedNumbers2.map((num) => num * num); // Using arrow function with map
console.log(sortedSquaredNumbers); // Output: [1, 4, 9, 16, 25]
// Example 37: Arrow function with chaining and async/await
const fetchDataChained = async () => {
    const data = await fetchData(); // Using arrow function with async/await
    return data.split(" "); // Chaining with split
};
fetchDataChained().then((data) => {
    console.log(data); // Output: ["Data", "fetched!"] after 2 seconds
});
// Example 38: Arrow function with class inheritance and method overriding
class Cat extends Animal {
    meow = () => {
        console.log(`${this.name} says Meow!`); // Using arrow function in a subclass
    };
}
const cat = new Cat("Whiskers");
cat.meow(); // Output: "Whiskers says Meow!"
// Example 39: Arrow function with class properties and method overriding
class Bird extends Animal {
    chirp = () => {
        console.log(`${this.name} says Chirp!`); // Using arrow function in a subclass
    };
}
const bird = new Bird("Tweety");
bird.chirp(); // Output: "Tweety says Chirp!"
// Example 40: Arrow function with class properties and method overriding
class Fish extends Animal {
    swim = () => {
        console.log(`${this.name} is swimming!`); // Using arrow function in a subclass
    };
}
const fish = new Fish("Nemo");
fish.swim(); // Output: "Nemo is swimming!"
// Example 41: Arrow function with class properties and method overriding
class Reptile extends Animal {
    crawl = () => {
        console.log(`${this.name} is crawling!`); // Using arrow function in a subclass
    };
}
const reptile = new Reptile("Slither");
reptile.crawl(); // Output: "Slither is crawling!"
// Example 42: Arrow function with class properties and method overriding
class Amphibian extends Animal {
    jump = () => {
        console.log(`${this.name} is jumping!`); // Using arrow function in a subclass
    };
}
const amphibian = new Amphibian("Frog");
amphibian.jump(); // Output: "Frog is jumping!"