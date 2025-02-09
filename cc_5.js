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

// Task 4 - Price Adjustments //
let prices = [100, 200, 300]; // prices
let discountedPrices = prices.map(function(price)
{ return price * 0.9 }); // 10% Discount
console.log(discountedPrices); // logged

// Task 5 - Product Availability //
let inventory = [5, 0, 12, 8, 0]; // inventory
let availableProducts = inventory.filter(function(quantity) 
{return quantity > 0}); // no 0 in inventory
console.log(availableProducts);// logged

// Task 6 - Revenue Calculation //
let sales = [500, 300, 200, 400]; // sales
let totalRevenue = sales.reduce(function(total, sale) //
{return total + sale;}, 0);
console.log(totalRevenue); // logged 

// Task 7 - Customer Search //
let customers = ["Alice", "Bob", "Charlie", "David"]; // Customers 
let foundCustomer = customers.find(function(customer) 
{return customer === "Charlie";}); // Charlie found
console.log(foundCustomer); // logged

// Task 8 - Tax Calculation // 
function calculateTax(amount, taxRate) {
let tax = amount * taxRate;
console.log("Tax: $" + tax); // logged
return tax;} 

// Task 9 - Discount Application //
let applyDiscount = function(price, discount) {
let discountedPrice = price - (price * discount);
console.log("Discounted Price: $" + discountedPrice); // logged
return discountedPrice;};