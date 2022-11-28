// Sending Request to Server // 
fetch("../data/data.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    //  console.log(data);
     console.table(data.results);
})
.catch(()=> {
    console.log("Please try again Later");
});