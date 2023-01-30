//Square of numbers
var arr = [10, 20, 30, 40]
var squareArray = []
console.log("Original array: ", arr)
function squareNumbers() {
    return function (item, index, squareArray) {
        squareArray[index] = item * item;
    }
}
function squareOfNumbers(p1) {
    var squarr = []
    return function() {
        for(let i=0;i<p1.length;i++) {
            squarr[i] = p1[i]*p1[i]
        }
        return squarr
    }
}
var getResult = squareOfNumbers(arr)
console.log(getResult())
// var performSquare = squareNumbers(arr)
// arr.forEach(performSquare)
// console.log("Squared array: ", arr)

//Mask phone number
var phoneNumber = "7834671109"
console.log("Phone number: ", phoneNumber)
var maskPhoneNumber = (phoneNum) => {
    let maskdNumber = ""
    for (let i=0;i<phoneNum.length;i++) {
        if (i > 2 && i < 7) {
            maskdNumber += "*"
        } else {
            maskdNumber += phoneNum[i]
        }
    }
    return maskdNumber
}
var securedPhoneNumber = maskPhoneNumber(phoneNumber)
console.log("Masked phone number: ", securedPhoneNumber)

//Highest Salary
var empArr = [
    { empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
    { empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
    { empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
    { empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
    { empId: 105, empName: "Keshav", salary: 6000, deptId: "D2" },
    { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
    { empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]
function findMaxSalaryEmployee() {
    var max = { salary: 0 };
    empArr.forEach(p => {
        if (p.salary > max.salary) {
            max = p
        }
    });
    return max
}
console.log(findMaxSalaryEmployee())