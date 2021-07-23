function getNumber(num){
    var input = document.getElementById("input");
    input.value += num;
}

function valueClear(){
    var input = document.getElementById("input");
    input.value = ""
}

function getResult(){
    var input = document.getElementById("input");
    input.value = eval(input.value);
}