


let counter = 0;
let counterTitle = document.getElementById('counter')
function increment(){
    counter = counter + 1;
    counterTitle.innerText = counter;
}


function decrement(){
    if(counter > 0){
        counter = counter - 1;
        counterTitle.innerText = counter;
    }
    
}
function reset(){
    counter = 0;
    counterTitle.innerText = counter;
}