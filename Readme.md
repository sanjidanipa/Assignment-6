1) What is the difference between var, let, and const?
Ans:
Var ---> This is a variable name that has global and functional scope, and can be redeclared and reassigned and if the variable is hoisted before declaration, it will show undefined.

let ---> This is a variable name that block scope and can be redeclared but can be reassigned, in other words, modified, and if it is hoisted before declaration, an error will be shown.

const -----> This is a variable name that block scope and cannot be redeclared or reassigned, and if it is hoisted before declaration, an error will be shown.

2) What is the difference between map(), forEach(), and filter()?
Ans:
map() ----> It applies a function to each element of an array and returns a new array, while the original array remains unchanged.

forEach() ----> It applies a function to each element of an array but does not return anything,it just executes the function on each element.

filter() ---> It check each element of an array with a condition, adds it to a new array if the condition is fulfill, and the original array remains unchanged.


3) What are arrow functions in ES6?
Ans:
Arrow functions in ES6 in shorter syntax way to code but it works like normal function. Don't need function keyword , the return keyword and curly brackets.

4) How does destructuring assignment work in ES6?
Ans:
this is shorter syntax with this, values from any array or object can be extracted and assigned to separate variables.example:

const person= {
    name : "nipa",
    age : 20
}
const {name, age} = person;
console.log(name)

5) Explain template literals in ES6. How are they different from string concatenation?
Ans:
template syntax it is expressed using backticks(``) instead of single('') or double("") quotes and by using ${...}, variables or expressions can be inserted inside template literals to directly create a string, template literals make string building easier, cleaner, and more advance compared to old-style concatenation