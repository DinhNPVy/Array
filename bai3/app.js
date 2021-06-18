let fruits = [];

function myFunction() {
    for(let i = 0; i < 10; i++){
        fruits[i] = +prompt("Nhập mảng thứ " + i  + ":");
    }

    fruits.sort(function(a, b){return b - a});

    document.getElementById("demo").innerHTML = fruits;

}