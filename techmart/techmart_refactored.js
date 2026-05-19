function calculateSubtotal(cart) {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].price * cart[i].quantity;
    }
    return subtotal;
}

function calculateDiscount(subtotal, customerType) {
    if (customerType === "VIP") {
        return subtotal * 0.20;
    } else if (customerType === "MEMBER") {
        return subtotal * 0.10;
    }
    return 0;
}

function calculateTax(amount, taxRate = 0.10) {
    return amount * taxRate;
}

function printReceipt(subtotal, discount, tax, finalTotal) {
    console.log("--- HÓA ĐƠN TECHMART ---");
    console.log("Tạm tính: " + subtotal + " VNĐ");
    console.log("Giảm giá: " + discount + " VNĐ");
    console.log("Thuế VAT: " + tax + " VNĐ");
    console.log("TỔNG THANH TOÁN: " + finalTotal + " VNĐ");
    console.log("------------------------");
}

function processOrder(cart, customerType) {
    const subtotal = calculateSubtotal(cart);
    const discount = calculateDiscount(subtotal, customerType);
    const totalAfterDiscount = subtotal - discount;
    const tax = calculateTax(totalAfterDiscount);
    const finalTotal = totalAfterDiscount + tax;

    printReceipt(subtotal, discount, tax, finalTotal);
    return finalTotal;
}

const myCart = [
    { item: "Laptop", price: 15000000, quantity: 1 },
    { item: "Chuột", price: 300000, quantity: 2 }
];
processOrder(myCart, "VIP");