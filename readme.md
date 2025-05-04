

1️⃣ Basic Theory Questions
Q1: What is the main difference between map, filter, and reduce in JavaScript?

Q2: What does the map() method return if you don’t include a return statement inside the callback?

Q3: Can filter() change the length of the array? Why or why not?

Q4: What is the default value (initialValue) used for in reduce(), and what happens if you omit it?

Q5: Are map, filter, and reduce chainable? Why?

2️⃣ Return & Behavior Focused Coding Questions
Q6: What will the following code return?

const arr = [1, 2, 3];
const result = arr.map(num => {
  num * 2;
});
console.log(result);
(Expected answer: [undefined, undefined, undefined] because of missing return in the arrow function block.)

Q7: What will this filter() return?

const arr = [10, 20, 30];
const result = arr.filter(num => {
  num > 15;
});
console.log(result);
(Expected answer: [] — no return, so it’s always falsy.)

Q8: What is the return type of reduce()? Give an example of reducing an array of numbers to a string.

Q9: Predict the output:

const nums = [1, 2, 3, 4];
const result = nums.reduce((acc, curr) => acc + curr, 0);
console.log(result);
(Expected answer: 10)

3️⃣ Practical Problem-Solving Questions
Q10: Using map(), return an array of string lengths from this array:

["apple", "banana", "cherry"]
(Expected: [5, 6, 6])

Q11: Using filter(), return only even numbers from this array:

[1, 2, 3, 4, 5, 6]
Q12: Using reduce(), flatten the following array:

[[1, 2], [3, 4], [5, 6]]
(Expected: [1, 2, 3, 4, 5, 6])

Q13: Write a single chain of map, filter, and reduce that doubles numbers, filters out odd numbers, and sums the result from:

[1, 2, 3, 4, 5]
4️⃣ Edge Cases & Debugging
Q14: What happens if you map() an empty array? Does the callback get executed?

Q15: Explain why this code gives an unexpected result:

const arr = [1, 2, 3];
const result = arr.map((num) => {
  return;
});
console.log(result);
(Expected: [undefined, undefined, undefined] because return; returns undefined.)




Advanced Logical Questions
Q1: You have a deeply nested array of numbers like:

js
Copy
Edit
[1, [2, [3, [4, 5]]]]
Write a reduce-based function to completely flatten it into:

js
Copy
Edit
[1, 2, 3, 4, 5]
Q2: Without using flatMap, implement the functionality of flatMap using map and reduce combined.

Q3: How would you use reduce to group an array of objects by a property? For example:

js
Copy
Edit
[{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}, {type: 'fruit', name: 'banana'}]
Into:

js
Copy
Edit
{
  fruit: ['apple', 'banana'],
  vegetable: ['carrot']
}
Q4: Consider a list of asynchronous functions (returning Promises). How can you chain them sequentially using reduce, ensuring each one waits for the previous to finish?

Q5: You have an array of numbers, but you want to create a reduce that finds both the min and max in one pass, returning {min, max}. Write it in a concise way.

Q6: How can you implement a lazy evaluation pipeline using map and filter that only processes data when explicitly requested (similar to streams)?

Q7: You need to count how many times each unique word appears in a string using a combination of split, map, and reduce. What’s your approach?

Q8: Suppose you have two arrays:

js
Copy
Edit
const arr1 = [1, 2, 3];  
const arr2 = [4, 5, 6];
How can you write a reduce that merges them into a single array of paired objects like:

js
Copy
Edit
[{a: 1, b: 4}, {a: 2, b: 5}, {a: 3, b: 6}]
Q9: Imagine you have a very large dataset (millions of records). What performance considerations or alternatives would you think about before using map, filter, or reduce directly? How could you handle it efficiently?

Q10: Can you write a custom implementation of map (let's call it myMap) using reduce?

Do you want detailed answers for each of these advanced questions too?



## JavaScript Interview Guide for Experienced Developers

---

### ✅ Commonly Asked JavaScript Interview Questions

1. Explain the event loop and call stack in JavaScript.
2. What is hoisting? How do `let`, `const`, and `var` behave?
3. How does prototypal inheritance work?
4. What are closures? Give practical use cases.
5. What is the difference between `==` and `===`?
6. How do arrow functions differ from traditional functions?
7. How do promises and async/await work under the hood?
8. What is the difference between shallow copy and deep copy?
9. How do you handle memory leaks in JavaScript?
10. Explain debouncing vs. throttling with examples.

---

### 🔍 Advanced Logic Questions

#### Q1: Debounce Implementation

```js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

#### Q2: Deep Clone an Object

```js
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = deepClone(obj[key]);
    return acc;
  }, {});
}
```

#### Q3: Compose Function Implementation

```js
function compose(...fns) {
  return (x) => fns.reduceRight((v, f) => f(v), x);
}
```

#### Q4: Chain Promises Dynamically

```js
function chainPromises(functions) {
  return functions.reduce((p, fn) => p.then(fn), Promise.resolve());
}
```

#### Q5: Implement a Memoization Function

```js
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
```

---

### 🏢 Frequently Asked IT Company Questions (JavaScript Specific)

* How does `this` work in different contexts?
* What are the different ways to handle asynchronous code?
* Explain the module system (CommonJS, ES6 Modules).
* How does JavaScript handle concurrency?
* How is the `spread` operator different from `rest` parameters?
* What are WeakMap and WeakSet? Why use them?
* What happens when you do `new Array(100).map(x => 1)`?
* Difference between `Object.create(null)` and `{}`.
* How do microtasks and macrotasks differ?
* How to prevent callback hell?

---

### ⚙️ Tips for Interview Preparation

* Always **explain your thought process** before coding.
* Practice explaining concepts like you're teaching.
* Stay current with **ESNext features**.
* Code live on a whiteboard or shared screen to simulate real scenarios.

---






