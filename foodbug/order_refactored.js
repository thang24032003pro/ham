function validateOrder(order) {
    if (!order.items || order.items.length === 0) {
        return { isValid: false, message: "Đơn hàng rỗng!" };
    }
    if (!order.email || !order.email.includes("@")) {
        return { isValid: false, message: "Email không hợp lệ!" };
    }
    return { isValid: true };
}

function calculateTotal(items) {
    let subtotal = 0;
    for (let item of items) {
        subtotal += item.price * item.quantity;
    }
    return subtotal * 1.1;
}

function saveOrderToDatabase(totalAmount) {
    let dbRecord = {
        orderId: Math.floor(Math.random() * 1000),
        amount: totalAmount,
        status: "PAID"
    };
    console.log(`[DB] Đã lưu đơn hàng ${dbRecord.orderId} vào CSDL.`);
    return dbRecord.orderId;
}

function sendReceiptEmail(email, totalAmount) {
    console.log(`[EMAIL] Đang gửi biên lai tới ${email}...`);
    console.log(`[EMAIL] Nội dung: Tổng tiền của bạn là ${totalAmount} VND.`);
}

function processOrder(order) {
    console.log("--- Bắt đầu xử lý đơn hàng ---");

    let validation = validateOrder(order);
    if (!validation.isValid) {
        return { status: "FAILED", message: validation.message };
    }

    let totalAmount = calculateTotal(order.items);
    let orderId = saveOrderToDatabase(totalAmount);
    
    sendReceiptEmail(order.email, totalAmount);

    return { status: "SUCCESS", orderId: orderId, total: totalAmount };
}

const mockOrder = {
    email: "khachhang@gmail.com",
    items: [
        { name: "Pizza", price: 150000, quantity: 2 },
        { name: "Coca", price: 20000, quantity: 3 }
    ]
};

console.log(processOrder(mockOrder));