// Sending Request to Server // 
fetch("../data/data.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    //  console.log(data);
    let results = data.results;
    let record = results.filter((items)=>{
        return items.id == 1
    })
     console.log(record);
});
// .catch(()=> {
//     console.log("Please try again Later");
// });