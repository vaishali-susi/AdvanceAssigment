 let btn = document.getElementById('btn');
 let show =document.getElementById('min');
function fact(a){

        if(a==0){
            return 1;
        }
   return  (a*fact(a-1));
    
    
}
x = fact(5);
 btn.addEventListener('click',()=>{show.innerText = fact(5)});



