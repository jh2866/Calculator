var number = document.querySelectorAll('.button.button.number');
// var operator = document.querySelectorAll('.button.button.mathButtons')
console.log(number);



let output = '';
let resultNum = '';
let theNum = '';
let opp = '';
//Display Numbers and Multiple Numbers on screen
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function(event) {
        //event.preventDefault();
        output += event.target.getAttribute('data-num');
        if (demo.innerText.length < 13) {
            if (!demo.innerText.includes(".")) {
                demo.innerText += output.charAt(output.length - 1);
                //console.log(demo.innerText);

            } else if (demo.innerText.includes(".") && !output.endsWith(".")) {
                demo.innerText += output.charAt(output.length - 1);
            }

            console.log(output, (i + 1));
        }

    });
}

//Clear button
function clearButton() {
    console.log("Check for CLEAR BUTTON");
    demo.innerHTML = ' ';
    output = '';
}
var clear = document.getElementById('btn-clear');
clear.addEventListener('click', clearButton);


//negative/plus button   
function oppoButton() {
    console.log("Check for OPP BUTTON");
    demo.innerHTML *= -1;
}
var oppButton = document.getElementById('opposite');
oppButton.addEventListener('click', oppoButton);


var percentage = document.getElementById('percent');
percentage.addEventListener('click', function() {
    console.log("Check for PERCENTAGE");
    demo.innerHTML = parseFloat(demo.innerHTML) / 100;
});

var subtractButton = document.getElementById('subtract');
subtractButton.addEventListener('click', function() {
    console.log("Check for SUBTRACT");
    demo.innerHTML = theNum;
    resultNum = demo.innerHTML - theNum;
    output += '-';
});
var plusButton = document.getElementById('plus');
plusButton.addEventListener('click', function() {
    console.log("Check for PLUS");
    demo.innerHTML = ' ';
    output += '+';

});
var divideButton = document.getElementById('divide');
divideButton.addEventListener('click', function() {
    console.log("Check for DIVIDE");
    demo.innerHTML = ' ';
    output += '/';

});
var multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener('click', function() {
    console.log("Check for MULTIPLY");
    demo.innerHTML = ' ';
    output += '*';

});

var equal = document.getElementById('equal');
equal.addEventListener('click', function() {
    console.log("Check for EQUAL");
    demo.innerHTML = resultNum;
    output += '=';
});