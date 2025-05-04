// scope clouser
function createCounter(){
    let count =0;
    return function(){
        count++;
        return count;
    }
}

const count = createCounter();
console.log(count());
console.log(count())

// Q2
// private access clouser

function createPerson(name, age){
    let privateAge = age;

    return {
        getName(){
            return name;
        },

        getAge(){
            return privateAge;
        },
        increaseAge() {
            privateAge++;
        }
    }
}

const person = createPerson('Abhi', 31);
console.log(person.getName())
console.log(person.getAge())
person.increaseAge()
console.log(person.getAge())

// Q3  custom multiplier

function multiPlyBy(factor){
    return function(number) {
        return factor * number;
    }
}
const double = multiPlyBy(5);
console.log(double(1))
console.log(double(2))

// q4

for(i=0; i<=3;i++){
    setTimeout(() => {
        console.log(i)
    }, 200);
}

// withclouser
console.log("*****resolve with clouser****")
for(var i=0; i<3; i++){
    (function(j){
        setTimeout(() => {
            console.log(j)
        }, 200);
    })(i)
}