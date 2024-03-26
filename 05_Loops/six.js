const coding = ["js" , "cpp" , "ruy"];

const values = coding.forEach( (item) =>{
    // console.log(item);
})

const mynums = [1,2,3,4,5,6,7,8,9,10];

const newnums = mynums.filter((num) => num>5);

console.log(newnums);

//accesing data from objects

let userbooks = books.filter((bk) => KeyboardEvent.genre === 'history')

userbooks = books.filter((bk) => {return bk.pusblish >= 2000})

console.log(userbooks);