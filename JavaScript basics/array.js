// ***adding elements***
const num = [1, 2, 3]; // const does not stop from modifying the content of an array

// adding element at the end
num.push(6, 7);

// adding element at the beginning
num.unshift(9, 5, 3)

// adding element at the middle 
num.splice(3, 0, "a", "b"); // 3 --> index to start, 0 --> use to remove the num of elements, "a,b" --> adding at index 3
console.log(num);

// *** Finding elements primitive type***

const numbers = [1, 3, 4, 6, 3, 7, 3, "a"];

console.log(numbers.indexOf(3)); // to find the index of element 4 
console.log(numbers.indexOf("b")); //  index of element "b" is -1 as it does not exist
console.log(numbers.indexOf(3, 2)); // to find the index of element 3 starting from index 2
console.log(numbers.lastIndexOf(3)); // to find the last index of element 3 
console.log(numbers.includes("a")); //to check if the element is part of the array

// *** Finding elements reference type***

const course = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" }
];

const courseName = course.find(function(course) { //find funtion repeats until the elements is found and stops right after, 
    return course.name === "a"; //is undefined if not found
});

const courseIndex = course.findIndex(function(index) {
    return index.name === "b";
})
const frontArrow = course.find(test => test.name === "c"); // course.find ((test) => {return test.name === "a"});
console.log(courseName);
console.log(courseIndex);
console.log(frontArrow);

// *** Removing elements from an Array ***

number = [1, 2, 5, "a", "b", 7, 8];

// removing number from end 
end = number.pop();
console.log(end);

// removing number from the biginning 
big = number.shift();
console.log(big);

// removing from middle 
middle = number.splice(2, 3);
console.log(middle);
console.log(number);

// *** Emptying an array 4 ways ***

let newArray = [1, 2, 3, 5, 6, 7];

number = [] // is feasible, but if newArray has another reference then this method won't work

newArray.length = 0; //set the newArray to empty array

newArray.splice(0, newArray.length) //also empty array

while (newArray.length > 0)
    number.pop();

console.log("newArray", newArray);

// *** Combining and Slicing Arrays ***
const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [{ id: 1 }]

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(2, 5);
console.log(slice);

const all = combined.concat(third);
third[0].id = 2; //the id gets update as 2 for all as it is a ref of third.
console.log(all);

// *** Spread Operator *** 
const spread = [...first, ...second, "a", ...third]; //works same as concat but cleaner 
console.log(spread);

// *** Iterating over an Array ***
let array = [1, 2, 4, 5, 5, 6, 7, 7];

// 1st method 
for (let num of array)
    console.log(num)

// 2nd Method 
array.forEach((num, index) => console.log(index, num));

array.forEach(function(num, index) {
    console.log(index, num);
});

// *** JOining Arrays ***
const con = [1, 2, 6, 3, 5]
const joined = con.join(','); //join always returns a string
console.log(joined);

const message = "tjos is a message"
const part = message.split(' '); //splits the array at whiteSpace
console.log(part);

const combinedMessage = part.join('-');
console.log(combinedMessage);

// Sorting Arrays
const sorted = con.sort();
console.log(sorted);

const rev = con.reverse();
console.log(rev);

const courses = [
    { id: 1, name: "Node.js" },
    { id: 2, name: "javascript" },
];

courses.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1
    return 0
});

console.log(courses);

// *** Every and Some method ***
const everyNum = [1, 4, 6, -1, 5]

const allPos = everyNum.every(function(value) { //iterates untill the condition fails 
    return value >= 0;
});

console.log(allPos);

const somePos = everyNum.some(function(val) { //search will terminate as soon as the condition is satisfied 
    return val <= 0;
})

console.log(somePos);

// *** Filter an Array ***

const filtered = everyNum.filter(value => value >= 0); // filter checks for the given condtion to generate a new array
console.log(filtered);

// const filter = everyNum.filter(function(value) {
//     return value >= 0;
// });
// console.log("s", filter)

// Mapping a Array ---> mapping applies the given condtion/operation to all the elem of the array and returns a new array.

const mapped = filtered.map(function(value) {
    return "<li>" + value + "</li>"
});

const mappedObj = everyNum.map(num => {
    const obj = { value: num };
    return obj;
});
// const mappedObj = everyNum.map(num => ({value:num})); //callback need to be in paranthesis 
console.log(mappedObj);

// Multiple filters and Mapping

const multi = everyNum
    .filter(num => num >= 0)
    .map(num => num * 2)
    .filter(nu => nu > 5)
    .map(obj => ({ value: obj }));
console.log(multi);

// reducing an Array --  reduces an array to a single value
const price = [21, 23, 4, 4, 5, 6];
const total = price.reduce((acc, curnt) => {
    return acc + curnt;
}, 0); //0 is the initial value of acc

// const total = price.reduce((acc, curnt) => acc + curnt);
console.log(total)

// let sum = 0;
// for (let n of price) {
//     sum += n
// };
// console.log(sum);