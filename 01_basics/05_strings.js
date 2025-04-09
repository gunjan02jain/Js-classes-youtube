const name = 'Gunjan'
const repoCount = 50

// old synteax console.log(name + repoCount + 'Value');


// modern syntax below
console.log(`Hello me name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('gunja-nhc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   gunjan     "
console.log(newStringOne);
console.log(newStringOne.trim());








