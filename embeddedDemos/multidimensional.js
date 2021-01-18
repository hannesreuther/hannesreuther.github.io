/*
let matrix = [];

matrix[0,1] = 1;
matrix[0,2] = 2;
matrix[1,1] = 3;
matrix[1,2] = 4;
matrix[2,1] = 5;
matrix[2,2] = 6;

console.log(matrix);
*/

let matrix = [];
for(var k=0; k<60; k++) {

    let randomNumbers = [];
    for (var i = 1; i <= 4; i++) {
    var value = Math.random() * (20 - 10) + 10;
    
    let index = i-1;
    randomNumbers[index] = value;  
    
    }
    matrix[k] = randomNumbers;
}

 let v1 = matrix[3][1];

console.table(matrix);

console.log(v1);