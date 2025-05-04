
Array.prototype.myReducer = function(cb, initalValue){
    var accumulator = initalValue;

    for (let i=0; i<this.length;i++){
        accumulator = accumulator?cb(accumulator, this[i],i,this): this[i];
    }

    return accumulator;
}

const num = [2,3,4,5]
const data = num.myReducer((acc,v)=>{return acc+v},0);
console.log(data)