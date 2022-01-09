
const btn = document.getElementById("btn");
var show = document.getElementById("min");

const sum=(...numbers)=>{
    let min = numbers[0];
for(let i=0 ; i<numbers.length;i++){
    if(min>numbers[i]){
        
        min = numbers[i];
    } 
}
show.innerText = min;
}
btn.addEventListener('click', ()=>{sum(-1,2,-3)});



// sum(-1,2,3);
// sum(1, 2, 3, 4, 5, 6); 
// sum(-1, -5, 10);
// sum(10, 20);