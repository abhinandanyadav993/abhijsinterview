// Q1

const obj = {};
const a = { key: 'a' };
const b = { key: 'b' };

obj[a] = 123;
obj[b] = 456;

console.log(obj);


// q2:
const obj = {
    name: 'Test',
    regular: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
};

obj.regular();
obj.arrow();

// Reason: Arrow functions don’t have their own this; they inherit from the enclosing scope (likely global).