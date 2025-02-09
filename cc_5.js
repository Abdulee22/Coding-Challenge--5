// Task 1 - Customer Profile //
let customer = {
name: "John Doe", // name
age: 35, //age 
email: "john.doe@email.com", // email
};
console.log("Name: " + customer.name + ", Age: " + customer.age + ", Email: " + customer.email); // logged

// Task 2 - Order Details //
let order = {
orderId: 12345, // order id
totalAmount: 150, // Total Amount
status: "Processing", // status
displayOrder: function() 
{ console.log("Order ID: " + this.orderId + ", Total: $" + this.totalAmount + ", Status: " + this.status);}}; // logged
order.displayOrder();
    
// Task 3 - Shopping Cart //
let cartItems = ["PS5 ", "Camera", "iphone"]; // Cart Items
cartItems.push("Airpods"); // item added
cartItems.pop(); // item removed
cartItems.unshift("Razer Keybored"); // Item added to beginning
cartItems.shift(); // Item from beginning removed
console.log(cartItems); // logged

// Task 4 - Price Adjustments
let prices = [100, 200, 300]; // prices
let discountedPrices = prices.map(function(price)
{ return price * 0.9 }); // 10% Discount
console.log(discountedPrices); // logged
    