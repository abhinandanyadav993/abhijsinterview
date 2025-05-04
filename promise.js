// Q1

console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

async function test() {
    console.log(4);
    await Promise.resolve();
    console.log(5);
}
test();

console.log(6);


// 1, 4, 6: sync code

// 3, 5: microtasks

// 2: macrotask


// Q2

console.log('start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('promise1');
}).then(() => {
    console.log('promise2');
});

console.log('end');


// q3

async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

async1();

console.log('script end');
