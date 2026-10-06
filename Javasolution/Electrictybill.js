let units = 120;
let bill = 0;

if (units <= 50) {
    bill = units * 5;
} else if (units <= 100) {
    bill = (50 * 5) + ((units - 50) * 7);
} else if (units <= 200) {
    bill = (50 * 5) + (50 * 7) + ((units - 100) * 10);
} else {
    bill = (50 * 5) + (50 * 7) + (100 * 10) + ((units - 200) * 12);
}

console.log("Units Consumed:", units);
console.log("Total Electricity Bill: Rs.", bill);
