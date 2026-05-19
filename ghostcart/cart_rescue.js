function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}

let globalCart = {
    userId: "U123",
    totalPrice: 1500,
    items: ["Laptop", "Chuột không dây"],
    metadata: { isLocked: false }
};

function previewCheckout(cartData, newDiscountAmount, extraGift) {
    let tempCart = deepCopy(cartData); 
    
    tempCart.totalPrice = tempCart.totalPrice - newDiscountAmount;
    tempCart.items.push(extraGift);
    tempCart.metadata.isLocked = true;
    
    return tempCart; 
}

console.log("=== KIỂM THỬ GIỎ HÀNG TIÊU CHUẨN ===");
console.log("1. Giỏ hàng gốc TRƯỚC khi xem trước:", JSON.stringify(globalCart));

let previewResult = previewCheckout(globalCart, 200, "Bàn di chuột");
console.log("2. Giỏ hàng xem trước (Hiển thị cho khách):", JSON.stringify(previewResult));
console.log("3. Giỏ hàng gốc SAU khi xem trước (ĐÃ VÁ LỖI):", JSON.stringify(globalCart));