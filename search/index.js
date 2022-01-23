let country = async ()=>{
    let details;
    let countryList = await fetch('http://universities.hipolabs.com/search?country=india');
    list = await countryList.json();
    let display = function(){
        let container = document.querySelector('.container');
        let h3 = document.createElement('h3');
        h3.innerText = details;
        container.appendChild(h3);

    }
    list.forEach((elem)=>{
details = elem.name;
display();
    })
    
}
country();