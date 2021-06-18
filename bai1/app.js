let number = [];

for(let i = 1; i <= 10; i++){
        number[i] = +prompt("Nhập mảng thứ " + i  + ":");
}
    let value = +prompt("Nhập số V: ");
    for(i = 1; i <= number.length; i++){
        // Trả về true hoặc false, kiểm tra sự tồn tại của phần tử nằm trong mảng.
        if(number.includes(value)){
        
        alert("V is in the array");
        }else{
        alert("V is not in the array");

        }
    }



1
