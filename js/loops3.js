console.log("Here we go again...");
let guess = prompt("Enter a number..."); 

//document.getElementById('output').innerHTML = "";

if (isNaN(guess)) {
        alert("You have not entered a number...refresh the page");
} else {
    for (i=1; i<=guess; i++)    {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            document.getElementById('output').innerHTML +='chimichangas! <br>';
        } else if (i % 3 == 0) {
            document.getElementById('output').innerHTML +='chimi <br>';
        } else if (i % 5 == 0) {
            document.getElementById('output').innerHTML +='changas <br>';
        }   else    {
            document.getElementById('output').innerHTML += (i + '<br>');

        }
    }
}