// 1.
// Double the Numbers Given an array of numbers, transform each number by doubling its value IN A NEW ARRAY.

// const numbers = [2, 4, 6, 8]; // Expected output: [4, 8, 12, 16]
// const numbers = [2, 4, 6, 8];
// const expectedOutput = numbers.map((num) => {
//     return num*2
// })
// console.log (expectedOutput)
 


// 2. 

// Name Greetings You have an array of names. Transform each name into a greeting message IN A NEW ARRAY.

// const names = ["Alice", "Bob", "Charlie"]; // Expected output: ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]

// const names = ["Alice", "Bob", "Charlie"];
// let expectedOutput = names.map((name) =>{
//     return ("Hello, " + name + "!")
// }
// )
// console.log(expectedOutput)
 

// 3. Object Property Extraction Given an array of objects where each object has a firstName and lastName, extract just the lastName and return a new array with those.

// const people = [
//    {firstName: "John", lastName: "Doe"},
//    {firstName: "Anna", lastName: "Smith"},
//    {firstName: "Peter", lastName: "Jones"}
// ];
// // Expected output: ["Doe", "Smith", "Jones"]
// const people = [
//    {firstName: "John", lastName: "Doe"},
//    {firstName: "Anna", lastName: "Smith"},
//    {firstName: "Peter", lastName: "Jones"}
// ];
// let expectedOutput= people.map((people)=> {
// return people.lastName
// }
// )
// console.log (expectedOutput)

 

// 4.String Lengths Transform an array of strings into an array of numbers representing the length of each string.

// const words = ["apple", "banana", "cherry"];
// // Expected output: [5, 6, 6]
// const words = ["apple", "banana", "cherry"];
// let expectedOutput = words.map((word)=> {
//     return word.length
// }
// )
// console.log (expectedOutput)


 

// 5.  (OPTIONAL) Rendering a List in JSX (HTML) Imagine you're building a React component that displays a list of books. Given an array of book titles, transform this array into an array of JSX list items.

// const books = ["1984", "Brave New World", "Fahrenheit 451"];

// Use the .map method to convert the above array into the following JSX:

// [

//       <li key="1984">1984</li>,

//       <li key="Brave New World">Brave New World</li>,

//       <li key="Fahrenheit 451">Fahrenheit 451</li>

// ]
const books = ["1984", "Brave New World", "Fahrenheit 451"];
// (hard code)
let listArray = books.map((i)=>{
    // return ("<li key=" + i +">" + i + "</li>")
    return `<li key=${i}> ${i}</li>`
}
)
console.log (listArray)

// let listArray = books.map((i)=>{
   
 

//     }
//     )
//     console.log (listArray)

