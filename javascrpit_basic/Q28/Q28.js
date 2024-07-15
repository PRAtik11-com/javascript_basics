let basicSal = 30000;
let houseRentA = 6000;
let otherAllow = 6000;

// monthly salary
function part1(basic, hra, other) {
    return basic + hra + other;
}

// annual salary
function part2(monsal) {
    return monsal * 12;
}

let monsal = part1(basicSal, houseRentA, otherAllow);
let annualSal = part2(monsal);

console.log("Monthly Salary: " + monsal);
console.log("Annual Salary: " + annualSal);

