
// <!-- create working functions-->
// <!-- work on styling -->

// define boxes / divisions LAST THING
// assign random number generator
var randomnumber= Math.floor(Math.random()* (120-19+1) + 19);
console.log('random', randomnumber);

// assign wins and losses
var wins = 6;
var loss = 0;
var score = 0; 



// assign pictures with funtions connected to points
var redStone = Math.floor(Math.random() * (12 - 1) + 1);
var pinkStone = Math.floor(Math.random() * (12 - 1) + 1);
var purpleStone = Math.floor(Math.random() * (12 - 1) + 1);
var blueStone = Math.floor(Math.random() * (12 - 1) + 1);
console.log('test', redStone);


$('#random-number').text(randomnumber);


// assign total score value
$("#red").on('click', function () {
    score += redStone;
    $('#total-score').text(score);

})
console.log("score", score);



    


$("#blue").on('click', function () {
    score += blueStone;
    $('#total-score').text(score);
})

$("#pink").on('click', function () {
    score += pinkStone;
})

$("#purple").on('click', function () {
    score += purpleStone;
})





// function='score-keeping'
$('#wins').text(wins);
$('#losses').text(loss);