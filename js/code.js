// Sending Request to Server // 
// fetch("../data/data.json")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//      console.log(data);
//     let results = data.results;
//     let record = results.filter((items)=>{
//         return items.id == 1
//     })
//      console.log(record);
//      console.table(results);
// })
// .catch((err)=> {
//     console.log("Please try again Later");
// });
// =============================================================
// let data = [9, 12, "Jake", 8, 1];
// Adding a New Element into an Array use {push()-method} //
// data.push(20)
// =============================================================
//  To Remove the First Element use {shift()-method} //
// data.shift()
// =============================================================
// data.pop()
// To display the elements Removed //
// console.log(data.pop());
// =============================================================
// data.unshift("Matthew")
// =============================================================
// Similar to filter()-method //
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
// =============================================================
// Sorting Use sort()-method //
// let onlyNumbers = data.filter(Number)
// console.log(onlyNumbers);
// let sortedValues = onlyNumbers.sort((a,b)=>{
//     if(a < b)
//     return -1;
//     return 1;
// });
// let sortedValues = onlyNumbers.sort((a,b)=>(a-b));
// console.log(sortedValues);
// =============================================================
// Slice slice()-method //
// console.log(sortedValues.slice());
// let first = data.slice(0, 2);
// let second = data.slice(3);
// =============================================================
//  Spread Operator to Show all Elements of the Array //
// let finalResults = [...first, ...second];
// console.log(finalResults);
// =============================================================
// Splice splice()-method //
// splice(start, removeCount, item1, item2...)
// console.log(data);
// data.splice(0, 0,"Matthew","Camryn");
// data.splice(2,1,"Jeff");
// console.log(data);
// =============================================================
// Async 1st-Example//
// (async function fetchData() {
//     let res = await fetch("../data/data.json");
//     let data = await res.json();
//     console.log(data.results);
// })();
// =============================================================
// Async 2nd-Example//
//row
let wrapper = document.querySelector('.wrapper');
async function fetchData() {
    let res = await fetch("https://randomuser.me/api?results=100");
    let data = await res.json();
    return data.results;
  }
(async function display() {
    let data = await fetchData()
    data.forEach((item) => {
      console.log(item);
    wrapper.innerHTML +=`
    <div class="card" style="width: 18rem;">
        <img src="${item.picture.large}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
        <h5 class="card-title">${item.name.first} ${item.name.last}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
    });
  })();
// ======================2nd-Method====================================
// async function fetchData() {
//     let res = await fetch("https://randomuser.me/api?results=100");
//     let data = await res.json();
//     console.table(data.results);
// };
// fetchData()
// =============================================================