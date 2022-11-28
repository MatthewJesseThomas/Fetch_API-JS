// Sending Request to Server // 
// fetch("../data/data.json")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
    //  console.log(data);
    // let results = data.results;
    // let record = results.filter((items)=>{
    //     return items.id == 1
    // })
    //  console.log(record);
    //  console.table(results);
// });
// .catch(()=> {
//     console.log("Please try again Later");
// });
let data = [8,9,12,1.2,"Jake"];
// =============================================================
// Adding a New Element into an Array use {push()-function} //
// data.push(20)
// =============================================================
//  To Remove the First Element use {shift()-function} //
// data.shift()
// =============================================================
// data.pop()
// To display the elements Removed //
// console.log(data.pop());
// =============================================================
// data.unshift("Matthew")
// =============================================================
// Similar to Filter() //
// let onlyNumbers = [];
// for(let k of data) {
//     if(typeof k != "string")
//     onlyNumbers.push(k)
//     console.log(onlyNumbers);
// }
// =============================================================
// console.log(data);
// console.log(data.filter(Number));
// console.log(data.filter(item => typeof item == "number"));