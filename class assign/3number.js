let a = 15; 
let b = 42; 
let c = 23; 
let largest;

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

console.log("The largest number is: " + largest);
