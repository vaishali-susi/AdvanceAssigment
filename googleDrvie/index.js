let btn = document.getElementById('btn');
let clicked = false;
let content_show = document.querySelector('.content_show');
let content_list = document.querySelector('.content_list');
btn.addEventListener('click',function(){
    if(clicked==false){
        content_show.classList.add('d-none');
        content_list.classList.remove('d-none');
        clicked=true;
        console.log("clicked");
    }else{
        
        content_list.classList.add('d-none');
        content_show.classList.remove('d-none');
        clicked=false;
    }
    console.log(clicked);
})

// btn.addEventListener("click",()=>{
//     console.log("working");
//     var grid = document.getElementById("grid");
//     var card = document.getElementById("card");
//     if(grid.classList.contains("d-none")){
//         grid.classList.remove("d-none");
//     }else{
//         grid.classList.add("d-none");
//     }
//     if(card.classList.contains("d-none")){
//         card.classList.remove("d-none");
//     }else{
//         card.classList.add("d-none");
//     }
// })