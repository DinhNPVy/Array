let fruits = [];

function myFunction() {
    for(let i = 0; i <= 10; i++){
        fruits[i] = prompt("Nhập mảng thứ " + i  + ":");
    }
    document.getElementById("demo").innerHTML = fruits;
    let value = prompt("Nhập số V: ");
    let index = fruits.indexOf(value);
    if (index > -1) {
    fruits.splice(index, 1);
    fruits.push(0);
    }

document.getElementById("demo").innerHTML = fruits;


}