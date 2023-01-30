const { ADDRGETNETWORKPARAMS } = require("dns")

let empArr = [
    { empId: 101, empName: "Asha", salary: 1001, deptId: "D1" },
    { empId: 102, empName: "Gaurav", salary: 2000, deptId: "D1" },
    { empId: 103, empName: "Karan", salary: 2000, deptId: "D2" },
    { empId: 104, empName: "Kishan", salary: 3000, deptId: "D1" },
    { empId: 105, empName: "Keshav", salary: 6000, deptId: "D2" },
    { empId: 106, empName: "Pran", salary: 4000, deptId: "D3" },
    { empId: 107, empName: "Saurav", salary: 3800, deptId: "D3" }]


 //   1. A function with arrOfObj as a parameter, searchSalary ; return pos of firstElement which has a particular salary -- arr.findIndex
 //   function f1(arrObj,searchSalary):number
 function employeeWithSalary(salary, empArray) {
   return empArray.findIndex(employee => (employee.salary == salary))
 }
var pos =  employeeWithSalary(6000,empArr)
console.log("employee position with given salary is ", pos)

//Add an obj at a particular index position in the arrOfObj
//function addEmp(arrObj,emp,position)=> boolean
var newEmployee =  { empId: 105, empName: "Kritika", salary: 5000, deptId: "D2" }
function addEmployee(newEmployee,index,empArr) {
    empArr.splice(index,0,newEmployee)
    console.log("Inserted element in array ", empArr)
}
//addEmployee(newEmployee, 2, empArr)

//3. Remove an obj from the arrOfObj
//function removeEmp(arrObj,emp)=> boolean
function removeEmp(empArr,employee) {
    empArr.splice(empArr.findIndex(emp => emp.empId === employee.empId) , 1)
    console.log("Removed employee ", empArr)
}
removeEmp(empArr,newEmployee)

// 4. Get a particule emp details from arrObj
// function getEmpDetails(arrObj,empId)=> Obj
function getEmpDetails(arrObj,empId) {
    return arrObj.filter(element => element.empId === empId)
}
console.log("Removed object is ",getEmpDetails(empArr, 106))