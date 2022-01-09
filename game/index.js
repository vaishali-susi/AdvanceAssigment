const heading = document.querySelector('.heading');
const resetBtn = document.querySelector('.reset-btn');

var gamecells = document.querySelectorAll('.cell');
isXturn = true;
var count = 0;

function checkstatus(){
        const index0ClassList=gamecells[0].classList;
        const index1ClassList=gamecells[1].classList;
        const index2ClassList=gamecells[2].classList;
        const index3ClassList=gamecells[3].classList;
        const index4ClassList=gamecells[4].classList;
        const index5ClassList=gamecells[5].classList;
        const index6ClassList=gamecells[6].classList;
        const index7ClassList=gamecells[7].classList;
        const index8ClassList=gamecells[8].classList;

        if(index0ClassList.contains('O')){
            if(index1ClassList.contains('O') && index2ClassList.contains('O')){
                alert("O won")
            }else if(index3ClassList.contains('O') && index6ClassList.contains('O')){
                alert('O won');
            }else if(index4ClassList.contains('O') && index8ClassList.contains('O')){
                alert("O won");
            }
        }
        else if(index1ClassList.contains('O') && index4ClassList.contains('O') && index7ClassList.contains('O')){
            alert("O won");
        }
        if(index2ClassList.contains('O')){
            if(index5ClassList.contains('O') && index8ClassList.contains('O')){
                alert("O won")
            }else if(index4ClassList.contains('O') && index6ClassList.contains('O')){
                alert('O won');
            }else if(index1ClassList.contains('O') && index0ClassList.contains('O')){
                alert("O won");
            }
        }
        else if(index3ClassList.contains("O") && index4ClassList.contains("O") && index5ClassList.contains("O") || index3ClassList.contains("O") && index0ClassList.contains("O") && index6ClassList.contains("O") ){
            alert("O won");
        }
        else if(index4ClassList.contains('O')){
            if(index1ClassList.contains('O') && index7ClassList.contains('O')){
                alert("O won");
            }
            else if(index2ClassList.contains('O') && index6ClassList.contains('O')){
                alert('O won');
            }
            else if(index0ClassList.contains('0') && index8ClassList.contains('O')){
                alert('O won');
            }else if(index3ClassList.contains('0') && index5ClassList.contains('O')){
                alert('O won');
            }
        }
        else if(index5ClassList.contains('O') && index2ClassList.contains('O') && index8ClassList('O') || index5ClassList.contains('O') && index3ClassList.contains('O') && index4ClassList.contains('O')){
            alert('O won');
        }
        else if(index6ClassList.contains('O') && index0ClassList.contains("O") && index3ClassList.contains('O') || index6ClassList.contains('O') && index7ClassList.contains('O') && index8ClassList('O')){
            alert('O won');
        }
        else if(index7ClassList.contains('O') && index6ClassList.contains("O") && index8ClassList.contains('O') || index7ClassList.contains('O') && index1ClassList.contains('O') && index4ClassList.contains('O')){
            alert('O won');
        }
        else if(index8ClassList.contains('O')){
            if(index0ClassList.contains('O') && index4ClassList.contains('O')){
                alert('O won');
            }
            else if(index5ClassList.contains('O') && index2ClassList.contains("O")){
                alert('O won');
            }
            else if(index6ClassList.contains('O') && index7ClassList.contains('O')){
                alert('O won');
            }
        }
        if(index0ClassList.contains('X')){
            if(index1ClassList.contains('X') && index2ClassList.contains('X')){
                alert("X won")
            }else if(index3ClassList.contains('X') && index6ClassList.contains('X')){
                alert('X won');
            }else if(index4ClassList.contains('X') && index8ClassList.contains('X')){
                alert("X won");
            }
        }
        else if(index1ClassList.contains('X') && index4ClassList.contains('X') && index7ClassList.contains('X')){
            alert("X won");
        }
        if(index2ClassList.contains('X')){
            if(index5ClassList.contains('X') && index8ClassList.contains('X')){
                alert("X won")
            }else if(index4ClassList.contains('O') && index6ClassList.contains('X')){
                alert('X won');
            }else if(index1ClassList.contains('X') && index0ClassList.contains('X')){
                alert("X won");
            }
        }
        else if(index3ClassList.contains("X") && index4ClassList.contains("X") && index5ClassList.contains("X") || index3ClassList.contains("X") && index0ClassList.contains("X") && index6ClassList.contains("X") ){
            alert("X won");
        }
        else if(index4ClassList.contains('X')){
            if(index1ClassList.contains('X') && index7ClassList.contains('X')){
                alert("X won");
            }
            else if(index2ClassList.contains('X') && index6ClassList.contains('X')){
                alert('X won');
            }
            else if(index0ClassList.contains('X') && index8ClassList.contains('X')){
                alert('X won');
            }else if(index3ClassList.contains('X') && index5ClassList.contains('X')){
                alert('X won');
            }
        }
        else if(index5ClassList.contains('X') && index2ClassList.contains('X') && index8ClassList('X') || index5ClassList.contains('X') && index3ClassList.contains('X') && index4ClassList.contains('X')){
            alert('X won');
        }
        else if(index6ClassList.contains('X') && index0ClassList.contains("X") && index3ClassList.contains('X') || index6ClassList.contains('X') && index7ClassList.contains('X') && index8ClassList('X')){
            alert('X won');
        }
        else if(index7ClassList.contains('X') && index6ClassList.contains("X") && index8ClassList.contains('X') || index7ClassList.contains('X') && index1ClassList.contains('X') && index4ClassList.contains('X')){
            alert('X won');
        }
        else if(index8ClassList.contains('X')){
            if(index0ClassList.contains('X') && index4ClassList.contains('X')){
                alert('X won');
            }
            else if(index5ClassList.contains('X') && index2ClassList.contains("X")){
                alert('X won');
            }
            else if(index6ClassList.contains('X') && index7ClassList.contains('X')){
                alert('X won');
            }
        }
}


function cellhandler(event){
    const classList = event.target.classList;
    if(classList.length>1){
        return;
    }if(isXturn){
        classList.add("X");
        isXturn = false;
        heading.textContent = "O's Turn";
    }else{
        classList.add("O");
        isXturn = true;
        heading.textContent = "X's Turn";
    }
    count = count + 1;
    if(count>=5){
        checkstatus();
    }
}
for(cell of gamecells){
    cell.addEventListener('click',cellhandler);
}









