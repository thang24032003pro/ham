function calculateBonus(baseSalary, performanceScore) {
    if (performanceScore < 1) {
        return 0;
    }
    return baseSalary * (performanceScore - 1);
}

function calculateTax(totalIncome) {
    if (totalIncome > 10000000) {
        return totalIncome * 0.1;
    }
    return 0;
}

function calculateNetSalary(baseSalary, bonus, tax) {
    return (baseSalary + bonus) - tax;
}

function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + " VNĐ";
}

function processEmployeeSalary(employeeName, baseSalary, performanceScore) {
    let bonus = calculateBonus(baseSalary, performanceScore);
    let totalIncome = baseSalary + bonus;
    let tax = calculateTax(totalIncome);
    let netSalary = calculateNetSalary(baseSalary, bonus, tax);
    let formattedSalary = formatCurrency(netSalary);
    
    console.log("Nhân viên: " + employeeName);
    console.log("- Lương cơ bản: " + formatCurrency(baseSalary));
    console.log("- Tiền thưởng: " + formatCurrency(bonus));
    console.log("- Thuế khấu trừ: " + formatCurrency(tax));
    console.log("=> Lương thực nhận: " + formattedSalary);
    console.log("-----------------------------------------");
}

let employeeA = { name: "Nguyễn Văn A", baseSalary: 10000000, score: 1.0 };
let employeeB = { name: "Trần Thị B", baseSalary: 20000000, score: 1.5 };
let employeeC = { name: "Lê Văn C", baseSalary: 8000000, score: 0.8 };

processEmployeeSalary(employeeA.name, employeeA.baseSalary, employeeA.score);
processEmployeeSalary(employeeB.name, employeeB.baseSalary, employeeB.score);
processEmployeeSalary(employeeC.name, employeeC.baseSalary, employeeC.score);