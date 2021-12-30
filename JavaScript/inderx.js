// // const name="vamsi";
// // var age=20;
// //  if(age>18){
// //      const  name="vamsi a";
// //     name="rahul";
// //      console.log(name);
// //  }

// //  console.log(name);
// let employee={
//     name:"govardhan",
//     desgination:"junior Software Developer",
//     salary:"3.5lpa",
//     mobile:6300806961
// }
// console.log(employee)
// alert("hi this is gova");
// let em=[2,3]
// let im=[4,5]
// let re=[2,3,em]
// let fi=[3,4,...im]
// console.log(re)
// console.log(fi)
// function add(x,y,...remainData){
//     console.log(x);
//     console.log(y);
//     console.log(remainData);
// }
// console.log(add(2,3,2541474547,2545456,356236,653126,6346564,78))
// (function demo(x,y));
// let demo= (x,y) =>
// {
//     return x*y
// }

// console.log(demo(3,4))
let employee=['dhanush','ramesh','gova']
// for(let i=0;i<employee.length;i++)
// {
//     console.log(employee[i])
// }
// for(let i in employee)
// {
//     console.log(object)
// }
// for(let i of employee){
//     console.log(i)
// // }
// employee.forEach(function(element)){
//    return element
// } 
let result= employee.map((element,index)=>{
    return element+" k"+ index
})
console.log(result)