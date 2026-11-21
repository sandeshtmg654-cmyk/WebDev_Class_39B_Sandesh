//QNO1
const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

const getDivision = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

const processResult = (name, m1, m2, m3, callback) => {
  const average = calculateAverage(m1, m2, m3);
  const division = callback(average);
  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};

processResult("Sita", 70, 75, 80, getDivision);

//QNO2
const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

const getDivision = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

const processResult = (name, m1, m2, m3, callback) => {
  const average = calculateAverage(m1, m2, m3);
  const division = callback(average);
  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};

processResult("Sita", 70, 75, 80, getDivision);

//QNO3
const calculateDiscount = (amount) => {
  if (amount >= 5000) return 20;
  if (amount >= 3000) return 15;
  if (amount >= 1000) return 10;
  return 0;
};

const calculateFinalPrice = (amount, discount) => {
  return amount - (amount * discount) / 100;
};

const checkout = (customerName, amount, callback) => {
  const discount = calculateDiscount(amount);
  const finalPrice = callback(amount, discount);
  console.log(`Customer: ${customerName}`);
  console.log(`Original Price: Rs. ${amount}`);
  console.log(`Discount: ${discount}%`);
  console.log(`Final Price: Rs. ${finalPrice}`);
};

checkout("Nikesh", 6000, calculateFinalPrice);

//QNO4
const getTicketPrice = (age) => {
  if (age < 12) return 150;
  if (age <= 17) return 200;
  if (age <= 59) return 300;
  return 200;
};

const calculateTotal = (price, quantity) => price * quantity;

const applyDiscount = (total, quantity) => {
  return quantity >= 5 ? total * 0.1 : 0;
};

const bookTicket = (name, age, quantity, callback) => {
  const price = getTicketPrice(age);
  const total = calculateTotal(price, quantity);
  const discount = callback(total, quantity);
  const finalAmount = total - discount;

  console.log(`Customer: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Tickets: ${quantity}`);
  console.log(`Total Before Discount: Rs. ${total}`);
  console.log(`Discount: Rs. ${discount}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

bookTicket("Hari", 25, 5, applyDiscount);

//QNO5
const calculateBonus = (salary) => {
  return salary >= 40000 ? salary * 0.1 : salary * 0.05;
};

const calculateTax = (salary) => salary * 0.05;

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  return salary + bonus - tax;
};

const generatePayslip = (name, salary, callback) => {
  const bonus = calculateBonus(salary);
  const tax = calculateTax(salary);
  const netSalary = callback(salary, calculateBonus, calculateTax);

  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${bonus}`);
  console.log(`Tax: Rs. ${tax}`);
  console.log(`Net Salary: Rs. ${netSalary}`);
};

generatePayslip("Ram", 50000, calculateNetSalary);

//QNO6
const calculateDelivery = (distance) => {
  if (distance <= 2) return 30;
  return 30 + (distance - 2) * 15;
};

const checkFreeDelivery = (orderAmount) => orderAmount >= 1000;

const processOrder = (customer, distance, orderAmount, callback) => {
  const deliveryCharge = checkFreeDelivery(orderAmount) ? 0 : callback(distance);

  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${deliveryCharge}`);
};

processOrder("Shyam", 5, 800, calculateDelivery);

//QNO7  
const validateWithdrawal = (amount, balance) => {
  return amount > 0 && amount % 500 === 0 && amount + 25 <= balance;
};

const withdrawMoney = (amount, balance, callback) => {
  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);

  if (callback(amount, balance)) {
    const fee = 25;
    const remainingBalance = balance - (amount + fee);
    console.log("Withdrawal Successful!");
    console.log(`Transaction Fee: Rs. ${fee}`);
    console.log(`Remaining Balance: Rs. ${remainingBalance}`);
  } else {
    console.log("Invalid withdrawal amount or insufficient balance.");
    console.log(`Remaining Balance: Rs. ${balance}`);
  }
};

withdrawMoney(3000, 10000, validateWithdrawal);

//QNO8
const getFoodPrice = (foodName) => {
  const menu = {
    Burger: 250,
    Pizza: 500,
    Momo: 150,
    Chowmein: 180,
  };
  return menu[foodName] || 0;
};

const calculateServiceCharge = (total) => total * 0.05;

const calculateOrder = (foodName, quantity, callback) => {
  const price = callback(foodName);
  return price * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = callback(foodName, quantity, getFoodPrice);
  if (foodAmount === 0) {
    console.log("Invalid food item selected.");
    return;
  }
  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);

//QNO9
const calculateBonus = (amount) => {
  if (amount >= 1000) return amount * 0.15;
  if (amount >= 500) return amount * 0.1;
  if (amount >= 100) return amount * 0.05;
  return 0;
};

const calculateTotalBalance = (amount, bonus) => amount + bonus;

const recharge = (number, amount, callback) => {
  const bonus = calculateBonus(amount);
  const totalBalance = callback(amount, bonus);

  console.log(`Mobile Number: ${number}`);
  console.log(`Recharge Amount: Rs. ${amount}`);
  console.log(`Bonus Received: Rs. ${bonus}`);
  console.log(`Total Balance: Rs. ${totalBalance}`);
};

recharge("9800000000", 1000, calculateTotalBalance);

//QNO10
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Cannot divide by zero" : a / b);

const calculate = (a, b, operationCallback) => operationCallback(a, b);

console.log(`Addition: 20 + 10 = ${calculate(20, 10, add)}`);
console.log(`Subtraction: 20 - 10 = ${calculate(20, 10, subtract)}`);
console.log(`Multiplication: 20 * 10 = ${calculate(20, 10, multiply)}`);
console.log(`Division: 20 / 10 = ${calculate(20, 10, divide)}`);
