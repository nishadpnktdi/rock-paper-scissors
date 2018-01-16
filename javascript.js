function computerPlay(){
var choices=[
'Rock',
'Paper',
'Scissors'
];
var randomString=Math.floor(Math.random()*choices.length);
var randomChoice=choices[randomString];
return randomChoice;
}