/* var obj=require("./module3");
var {f1,f2}=obj;
 */
var {f1,f2,findAllPosArrOfObj}=require("./module3");

var arr=[10,20,30,20];
var searchTerm=20;
var posArr=f1(arr,searchTerm);// works correctly
//var posArr=obj.findPosArr(arr,searchTerm);// no

var empArr=[
{empId:101,empName:"Sara",projectId:"P101"},
{empId:102,empName:"Keshav",projectId:"P101"},
{empId:103,empName:"Saurabh",projectId:"P102"},
{empId:104,empName:"Giri",projectId:"P102"},
{empId:105,empName:"Saraansh",projectId:"P103"},
{empId:106,empName:"Puja",projectId:"P104"},
{empId:107,empName:"Neha",projectId:"P104"},
{empId:108,empName:"Priyam",projectId:"P105"},
{empId:109,empName:"Pranav",projectId:"P105"},
{empId:110,empName:"Puja",projectId:"P104"}]


var searchPos=f2(empArr,"empName","Puja");

console.log(`Positions where Puja is the empName is  ${searchPos} `);

var posArr=findAllPosArrOfObj(empArr,"empName","Puja");
console.log(`Positions where Puja is the empName is  ${posArr} `);

var posArr=findAllPosArrOfObj(empArr,"projectId","P102");
console.log(`Positions where P102 is the projectId is  ${posArr} `);

module.exports={empArr}