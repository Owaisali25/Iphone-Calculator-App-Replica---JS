var displayInput = document.getElementById("displayInput");

function getValue(val){
    displayInput.value += val;
}
function solve(){
    displayInput.value = eval(displayInput.value);
}
function clearValue(){
    displayInput.value = "";
}

function clearLastValue(){
    displayInput.value = displayInput.value.slice(0,-1);
}