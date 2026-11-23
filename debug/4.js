const calculateBill = (price, quantity, discount) => {
  if (quantity <= 0) {
    console.log("Invalid quantity");
    return;
  }
  if (discount < 0 || discount > 100) {
    console.log("Invalid discount");
    return;
  }

  let subtotal = price * quantity;
  let discountAmount = subtotal * (discount / 100);
  let finalAmount = subtotal - discountAmount;

  console.log("Subtotal: " + subtotal);
  console.log("Discount: " + discountAmount);
  console.log("Final Amount: " + finalAmount);
  return finalAmount;
};

let bill1 = calculateBill(500, 3, 10);
let bill2 = calculateBill(1000, 2, 20);
console.log("Total payable: " + bill1);
console.log("Total payable: " + bill2);
