let btn = document.getElementById('btn');
let result = document.querySelectorAll('.lists');

function app(n){
    if(n>30){
        return;
    }
    if(n%3==0 && n%5!=0){
        let content = document.createElement('li');
        content.innerHTML = "Fizz";
        result.append(content);
        // console.log("Fizz");
        
    }else if(n%5==0 && n%3!=0){
        let content = document.createElement('li');
        content.innerHTML = "Buzz";
        result.append(content);
        // console.log("Buzz")
        
    }else if(n%3==0 && n%5==0){
// console.log("FizzBuzz");
let content = document.createElement('li');
        content.innerHTML = "FizzBuzz";
        result.append(content);

    }else{
        // console.log(n);
        let content = document.createElement('li');
        content.innerHTML = n;
        result.append(content);
    }
    app(++n);
}

btn.addEventListener('click', ()=>{app(0)})