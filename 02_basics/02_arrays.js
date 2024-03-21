const marvel_heroes = ["thor" , "spiderman" , "ironman"]
const dc = ["supermna" , "flash" , "batman"]

marvel_heroes.push(dc) //array ke andr as an array push kar deta hai

const allheroes = marvel_heroes.concat(dc);

// console.log(allheroes);

const all_new_heroes = [...marvel_heroes , ...allheroes]
// console.log(all_new_heroes);

const complex = [1,2,[3,4,5], [32,31,43 , [9,7]]];
const real = complex.flat(Infinity)
console.log(real);