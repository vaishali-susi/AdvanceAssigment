let code = 1234;
let btn = document.getElementById("btn");
var show = document.getElementById("myText")
btn.addEventListener('click',function(){
    var x = document.getElementById("myText").value;
    if(x==code){
show.type = "text";
    }
    x = "";
})


