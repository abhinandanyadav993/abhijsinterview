const person = {
    first: 'John',
    last: 'Doe',
     fullName: function() {
        return `${this.first} ${this.last}`;
    }
};

console.log(person.fullName()); // John Doe

const person2 = {
    first: 'Jane',
    last: 'Smith'
};
console.log(person.fullName.call(person2)); // Jane Smith  
console.log(person.fullName.apply(person2)); // Jane Smith
const bindMethod = person.fullName.bind(person2);
console.log(bindMethod()); // Jane Smith