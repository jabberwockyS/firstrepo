let side1 = 5;
let side2 = 6;
let side3 = 7;
let SP= (side1+side2+side3)/2; //SP = semi-perimeter
let area= Math.sqrt(SP*((SP-side1)*(SP-side2)*(SP-side3)))
console.log(SP);
console.log(area);