// Que1:

let students = [
    {name: "piyush", rollNumber: 31, marks: 80},
    {name: "jenny", rollNumber: 15, marks: 69},
    {name: "Kaushal", rollNumber: 16, marks: 35},
    {name: "Dilpreet", rollNumber: 7, marks: 55}

]

const data =students.map(stu =>{
    if(stu.marks<60){
        stu.marks+=20
    }
    return stu
}).filter(student => student.marks>60).reduce((acc, std)=>{return acc+ std.marks}, 0);

console.log(data)


// Q2


const arr = [10, 20, 30];
const result = arr.filter(num => {
  num > 15;
});
console.log(result);

// Q3
const fruits =["apple", "banana", "cherry"].map(fruit =>  fruit.length);

console.log(fruits)

// Q4:  ip: [[1, 2], [3, 4], [5, 6]]
// op: [1,2,3,4,5,6]

const flatArray = [[1, 2], [3, 4], [5, 6]].reduce((acc, currentArray) => acc.concat(currentArray), [])
console.log(flatArray)


// Q5: i/p [1, [2, [3, [4, 5]]]]
// o/p [1,2,3,4,5]
const inputArray =[1, [2, [3, [4, 5]]]];
const flatArr = (arr) =>{
return arr.reduce((acc, cArray) => Array.isArray(cArray)? acc.concat(flatArr(cArray)): acc.concat(cArray),[])
}

const nestedFlatArray = flatArr(inputArray)
console.log(nestedFlatArray)

// Q6:

const friutVegArray = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' },
    { type: 'vegetable', name: 'Potato' },
  ];
  
  const grouped =   friutVegArray.reduce((acc, obj) =>{

    if(!acc[obj.type]) acc[obj.type] = [];
    acc[obj.type].push(obj.name)
    return acc;
  },{})
  
  console.log(grouped);
  // { fruit: ['apple', 'banana'], vegetable: ['carrot'] }


//   Q7

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const paired = arr1.reduce((acc, val, idx) => {
  acc.push({ a: val, b: arr2[idx] });
  return acc;
}, []);

console.log(paired);
// [{a:1,b:4}, {a:2,b:5}, {a:3,b:6}]

  
