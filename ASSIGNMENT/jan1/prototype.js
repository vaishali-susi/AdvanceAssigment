Array.prototype.prime = function(){
    
   for(let i=0;i<this.length;i++){
        b = true;
       for(let j=2;j<this[i];j++){
if(this[i]%j==0){
    b = false;
    console.log(this[i] + " is a non prime number");
     break;
}
       }
       if(b == true)
       console.log(this[i] + " is a prime number");
   }
}

const arr3 = [3, 7, 12];
let s = arr3.prime();
console.log(s);