// Array.map((num, i, arr) =>{})

Array.prototype.myMap = function(cb){

    let temp =[];

    for(var i =0; i<this.length; i++){
        temp.push(cb(this[i]));
    }

    return temp;

}

var arr= [2,3,5,6]

const data =arr.myMap(val => val*2);

console.log(data);