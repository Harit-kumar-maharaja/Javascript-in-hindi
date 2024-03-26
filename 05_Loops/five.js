console.log(" For each loop in javascript");

const coding = ["js" , "cpp" , "ruby" , "python"]

// coding.forEach(function (val) {
//     console.log(val);
// })

coding.forEach( (item) =>{
    console.log(item);
});

// ********** accesing array of objects ********

const arr = [
    {
        language : "cpp",
        fullform : "c plus plus"
    },
    {
        language : "js",
        fullform : "javascript"
    },
    {
        language : "ruby",
        fullform : "ruby mac"
    }
]

arr.forEach( (item) =>{
    console.log(item.fullform);
})