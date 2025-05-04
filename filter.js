// Array.filter((num, i, arr) =>{})

    Array.prototype.myFilter = function(cb){

        let temp =[];
    
        for(var i =0; i<this.length; i++){
            if(cb(this[i],i, this)){
                temp.push(this[i])
            }
            
        }
    
        return temp;
    
    }
    
    var arr= [2,3,5,6]
    
    const data =arr.myFilter(val => val>4);
    
    console.log(data);