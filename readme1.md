## JavaScript Interview Guide with Answers for Experienced Developers

---

### ✅ Commonly Asked JavaScript Interview Questions & Answers

1. **Event Loop and Call Stack:**
   JavaScript uses a single-threaded event loop model. The call stack handles function calls; asynchronous tasks go to the task queue (macrotasks/microtasks) and are executed when the stack is empty.

2. **Hoisting (`let`, `const`, `var`):**
   Variables declared with `var` are hoisted and initialized as `undefined`. `let` and `const` are hoisted but not initialized, leading to a temporal dead zone if accessed before declaration.

3. **Prototypal Inheritance:**
   Objects inherit directly from other objects using the `__proto__` chain. Methods and properties are accessible via this chain if not found on the object itself.

4. **Closures:**
   A closure is a function that "remembers" its lexical scope even when executed outside that scope. Example: creating private variables in a module.

5. **`==` vs. `===`:**
   `==` does type coercion before comparison, while `===` checks both value and type.

6. **Arrow Functions vs. Traditional:**
   Arrow functions do not have their own `this`, `arguments`, or `super`. They are best for callbacks and avoid common `this` binding issues.

7. **Promises and Async/Await:**
   Promises represent eventual completion/failure of async tasks. `async/await` is syntax sugar over promises, enabling cleaner code and easier error handling via try/catch.

8. **Shallow vs. Deep Copy:**
   Shallow copy copies top-level properties; nested objects are shared. Deep copy clones everything recursively.

9. **Memory Leaks Handling:**
   Use weak references (WeakMap), clean event listeners, avoid global variables, and use profiling tools (Chrome DevTools) to spot leaks.

10. **Debouncing vs. Throttling:**
    Debouncing delays execution until after a pause (e.g., search input). Throttling ensures a function runs at most once in a given period (e.g., window resize).

---

### 🔍 Advanced Logic Questions (with Code)

(Q\&A already included in the previous version—no changes needed here.)

---

### 🏢 Frequently Asked IT Company Questions & Answers

* **`this` Contexts:**
  In global scope, `this` is `window` (non-strict) or `undefined` (strict). In objects, it's the object. In classes, depends on call site. Arrow functions inherit `this` from their lexical scope.

* **Async Code Handling:**
  Options: Callbacks, Promises, Async/Await, Observables (RxJS).

* **Module Systems:**

  * CommonJS: `require`, `module.exports` (Node.js)
  * ES6 Modules: `import/export` (modern browsers)

* **Concurrency Handling:**
  JavaScript is single-threaded; concurrency is simulated using the event loop and Web APIs (e.g., setTimeout, fetch).

* **Spread vs. Rest:**
  Spread: Expands elements (`[...arr]`). Rest: Collects arguments into an array (`function(...args)`).

* **WeakMap & WeakSet:**
  Store weakly-referenced objects, not preventing GC. Useful for caching without memory leaks.

* **`new Array(100).map(x => 1)`:**
  Returns an empty array of length 100. `map` skips uninitialized slots. Need `.fill()` first.

* **`Object.create(null)` vs `{}`:**
  `Object.create(null)` creates an object with no prototype (useful for pure key-value maps). `{}` has `Object.prototype`.

* **Microtasks vs. Macrotasks:**
  Microtasks (Promise callbacks) run before macrotasks (setTimeout). JS clears the microtask queue before moving to the next macrotask.

* **Preventing Callback Hell:**
  Use promises, async/await, or libraries like async.js to flatten nested callbacks.

---

### ⚙️ Tips for Interview Preparation

(Same as before.)

---


## JavaScript Interview Guide with Answers for Experienced Developers

---

### ✅ Commonly Asked JavaScript Interview Questions & Answers

1. **Event Loop and Call Stack:**
   JavaScript uses a single-threaded event loop model. The call stack handles function calls; asynchronous tasks go to the task queue (macrotasks/microtasks) and are executed when the stack is empty.

2. **Hoisting (`let`, `const`, `var`):**
   Variables declared with `var` are hoisted and initialized as `undefined`. `let` and `const` are hoisted but not initialized, leading to a temporal dead zone if accessed before declaration.

3. **Prototypal Inheritance:**
   Objects inherit directly from other objects using the `__proto__` chain. Methods and properties are accessible via this chain if not found on the object itself.

4. **Closures:**
   A closure is a function that "remembers" its lexical scope even when executed outside that scope. Example: creating private variables in a module.

5. **`==` vs. `===`:**
   `==` does type coercion before comparison, while `===` checks both value and type.

6. **Arrow Functions vs. Traditional:**
   Arrow functions do not have their own `this`, `arguments`, or `super`. They are best for callbacks and avoid common `this` binding issues.

7. **Promises and Async/Await:**
   Promises represent eventual completion/failure of async tasks. `async/await` is syntax sugar over promises, enabling cleaner code and easier error handling via try/catch.

8. **Shallow vs. Deep Copy:**
   Shallow copy copies top-level properties; nested objects are shared. Deep copy clones everything recursively.

9. **Memory Leaks Handling:**
   Use weak references (WeakMap), clean event listeners, avoid global variables, and use profiling tools (Chrome DevTools) to spot leaks.

10. **Debouncing vs. Throttling:**
    Debouncing delays execution until after a pause (e.g., search input). Throttling ensures a function runs at most once in a given period (e.g., window resize).

---

### 🔍 Advanced Logic Questions (with Code)

#### Logical Questions for Microtasks and Macrotasks

**Q1:** What is the output of the following code and why?

```js
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');
```

**Answer:**
Start
End
Promise
Timeout

Explanation: Microtasks (Promise) run before Macrotasks (setTimeout).

**Q2:** Explain the difference in output between these two cases:

```js
// Case A
Promise.resolve().then(() => console.log('P1'));
setTimeout(() => console.log('T1'), 0);
Promise.resolve().then(() => console.log('P2'));

// Case B
setTimeout(() => console.log('T1'), 0);
Promise.resolve().then(() => console.log('P1'));
Promise.resolve().then(() => console.log('P2'));
```

**Answer:**
Both cases output:
P1
P2
T1

But in Case A, you might assume interleaving, yet both Promises (P1, P2) are queued before the setTimeout fires.

**Q3:** What happens here?

```js
setTimeout(() => {
  console.log('Macrotask');
  Promise.resolve().then(() => console.log('Microtask inside Macrotask'));
}, 0);
```

**Answer:**
Output:
Macrotask
Microtask inside Macrotask

The microtask is queued inside the macrotask and runs right after it finishes.

#### Bonus Code

**Q4:** Implement a delay function using Promises that waits before resolving:

```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Usage
async function run() {
  console.log('Wait for 1 second');
  await delay(1000);
  console.log('Done');
}
run();
```

(Q\&A already included in the previous version—no changes needed here.)

---

### 🏢 Frequently Asked IT Company Questions & Answers

* **`this` Contexts:**
  In global scope, `this` is `window` (non-strict) or `undefined` (strict). In objects, it's the object. In classes, depends on call site. Arrow functions inherit `this` from their lexical scope.

* **Async Code Handling:**
  Options: Callbacks, Promises, Async/Await, Observables (RxJS).

* **Module Systems:**

  * CommonJS: `require`, `module.exports` (Node.js)
  * ES6 Modules: `import/export` (modern browsers)

* **Concurrency Handling:**
  JavaScript is single-threaded; concurrency is simulated using the event loop and Web APIs (e.g., setTimeout, fetch).

* **Spread vs. Rest:**
  Spread: Expands elements (`[...arr]`). Rest: Collects arguments into an array (`function(...args)`).

* **WeakMap & WeakSet:**
  Store weakly-referenced objects, not preventing GC. Useful for caching without memory leaks.

* **`new Array(100).map(x => 1)`:**
  Returns an empty array of length 100. `map` skips uninitialized slots. Need `.fill()` first.

* **`Object.create(null)` vs `{}`:**
  `Object.create(null)` creates an object with no prototype (useful for pure key-value maps). `{}` has `Object.prototype`.

* **Microtasks vs. Macrotasks:**
  Microtasks (Promise callbacks) run before macrotasks (setTimeout). JS clears the microtask queue before moving to the next macrotask.

* **Preventing Callback Hell:**
  Use promises, async/await, or libraries like async.js to flatten nested callbacks.

---

### ⚙️ Tips for Interview Preparation

(Same as before.)

---
