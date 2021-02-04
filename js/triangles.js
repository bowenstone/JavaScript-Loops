// // // let userInput = prompt("Enter something here.....Anything:");
// // if (isNaN(userInput)) {
// //     alert("You have not entered a number");
// // } else {
// //     alert('You have entered a number')
// }
const character = "*"; 
let triangle = "*";
document.getElementById('output').textContent = triangle
let userInput = prompt("Enter something here.....Anything:"); 
 if (isNaN(userInput)) {
        alert("You have not entered a number");
    } else {
        alert('You have entered a number')
        for (let i = 1; i <= userInput; i++){
    document.getElementById('output').textContent += triangle 
   document.write('*\n')
}
    }
