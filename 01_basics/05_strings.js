const name = "Harit";
const repocount = 15;

console.log(`Hello my name is ${name} and repocount is ${repocount}`);

const gamename = new String("harithhc")

console.log(gamename[0]);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));

const newstring = gamename.substring(0,5);
console.log(newstring);

const onemorenewstring = gamename.slice(-8,4);
console.log(onemorenewstring);

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20' , '-'));

console.log(url.includes('harit'));

console.log(gamename.split);


