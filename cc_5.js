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
    
    
    