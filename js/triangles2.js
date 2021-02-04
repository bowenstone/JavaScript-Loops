// // // let userInput = prompt("Enter something here.....Anything:");
// // if (isNaN(userInput)) {
// //     alert("You have not entered a number");
// // } else {
// //     alert('You have entered a number')
// }
const character = "*"; 
let triangle = "";
let userInput = prompt("How many lines tall you would like the triangle to be..."); 

document.getElementById('output').innerHTML = triangle;

if (isNaN(userInput)) {
        alert("You have not entered a number...refresh the page");
} else {
    //  right angle triangle pointing up 

    for (let i = 1; i <= userInput; i++)    {
        triangle = " ";
        for (let j=1; j<= i; j++)    { 
            triangle += character;
        }
        document.getElementById('output').innerHTML += (triangle + "<br>"); 
    }

    alert('Now an upside down right triangle...')
    
    // right angle triangle pointing down 
    
    document.getElementById('output').innerHTML = "";
    
    for (let i = 1; i <= userInput; i++)    {
        triangle = "";
        for (let j = userInput; j>=i ; j--)   { 
            triangle += character;
        }
        document.getElementById('output').innerHTML += (triangle + "<br>"); 
    }   
}