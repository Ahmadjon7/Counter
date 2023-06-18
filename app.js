const count = document.querySelector('.count');
const dec = document.querySelector('.dec');
const inc = document.querySelector('.inc');
const reset = document.querySelector('.reset');

let counts = 0;

dec.addEventListener('click', decf);
inc.addEventListener('click',incf);
reset.addEventListener('click',resetf);


function incf(){
    counts++;
    count.innerHTML = counts;
    if(counts > 0){
        count.style.color = "green";
    }
    if (counts == 0){
        count.style.color = "black"
    }
}

function decf(){
    counts--;
    count.innerHTML = counts;
    if(counts < 0){
        count.style.color = "red";
    }
    if(counts == 0){
        count.style.color = "black";
    }
}
function resetf(){
    counts = 0;
    count.innerHTML = counts;
    count.style.color = "black"
}
