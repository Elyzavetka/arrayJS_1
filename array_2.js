let myArray = [
    'Liza',
    'Katya',
    'Olga',

];

console.log(myArray);
console.log(myArray.length);

myArray[2] = 'Inna';
console.log(myArray);

myArray.splice(1, 1);
console.log(myArray);

let arrThree = ['Inna', 'Kate', 'Ron',];
arrThree.splice(0, 1, 'Mat');
console.log(arrThree);

let arrFour = ['Inna', 'Kate', 'Ron',];
arrFour.splice(1, 0, 'Lola', 'Robert');
console.log(arrFour);
