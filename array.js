// Q1:Eliminate all even integers from a matrix.
// i/p: [4, 1, 9, 10, 15, 22, 5, 14]
// o/p: [4, 10, 22, 14]

const arr =[4, 1, 9, 10, 15, 22, 5, 14, 4,9,10,15];

const resultData= arr.filter(value => value%2 ==0);
console.log(resultData);


// Q2:remove all repeated numbers from an array
// Input: [1,2,4,5,6,1,3,7,9,10]
// Output: [1, 2, 4, 5, 6, 3, 7, 9, 10]

function removeDuplicateNumber(inputData){
    const duplicateNumber =[];
    for(let number of inputData){
        if(duplicateNumber.indexOf(number)==-1){
            duplicateNumber.push(number)
        }
    }

    return duplicateNumber;
}

console.log(removeDuplicateNumber(arr));


// Q3:find all repeated numbers from an array
// Input: [1,2,4,5,6,1,3,7,9,10]
// Output: [1, 2, 4, 5, 6, 3, 7, 9, 10]

function findUniqueNumber(inputData){
    const uniqueNumber =[];
    for(let number of inputData){
       
        if(inputData.filter(value => value===number).length>1  && uniqueNumber.indexOf(number)==-1){
            uniqueNumber.push(number)
        }
    }

    return uniqueNumber;
}

console.log(findUniqueNumber(arr));



function noParams() {}
console.log(noParams.length);



