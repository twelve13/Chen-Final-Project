$(document).ready(function(){

//Declare all the variables that will be referenced
var incomeAmount = 0;
var allocations = [];
var labels = [];
var goals = [];
var showAmount = 0;

//when Setup button is clicked, previously hidden Setup form slides down
$('#setup-button').click(function() {
  $('#setup-form').slideDown();
});

//user will fill in form with .percentage-item and .name-item classes.  when Submit button is clicked:
$('#setup-form').submit(function(event) {
//all fields with percentage-item class will get pulled into an array called "allocations"
  allocations = $('.percentage-item');
//all fields with name-item class will get pulled into an array called "labels"
  labels = $('.name-item');
//all fields with goal-item class will get pulled into an array called "goals"
  goals = $('.goal-item');
//a variable called "displayLabels" is created that pulls all the divs with "show-label" class - this is where the labels for the jars will show up
  var displayLabels = $('.show-label');
//same for goals
  var displayGoals = $('.show-goal');
//for every item in the "labels" array, the value of what was entered in the field of the form gets put into a variable called "labelName"
//that gets put into the displayLabels variable so the names show up on the labels for the jars
  for (var i=0; i < labels.length; i++) {
    var labelName = $(labels[i]).val();
    $(displayLabels[i]).html(labelName);
  }

  for (var j=0; j < goals.length; j++) {
    var goalName = $(goals[j]).val();
    $(displayGoals[j]).html(goalName);
  }

  $('#setup-form').slideUp();
  event.preventDefault();
});

//when Income button is clicked, previously hidden Income form slides down
$('#income-button').click(function() {
  $('#income-form').slideDown();
});

//when Income form is submitted, will grab the value entered, multiply it by each value in array, and display
$('#income-form').submit(function(event) {
  incomeAmount = $('#income-entry').val();
  var displays = $('.show-amount');
  for (var h=0; h < allocations.length; h++) {
    var allocation = $(allocations[h]).val();
    console.log('This is what ALLOCATION is equal to: ' + allocation);
    var incomeJar = incomeAmount * allocation;
    console.log('This is what the income times each allocation is: ' + incomeJar);
    var currentJarAmount = parseFloat($(displays[h]).html());
      if (isNaN(currentJarAmount)) {
        showAmount = incomeJar;
      } else {
        showAmount = currentJarAmount + incomeJar;
      }
    $(displays[h]).html(showAmount);
  }
  $('#income-form').slideUp();
  event.preventDefault();
});

$('#help-button').click(function() {
  $('.help-instructions').slideToggle();
});

//there's probably some way to array and loop this, but I couldn't get it to work
$('.jar1').click(function(){
  $('.jar1').children('.toggle').slideToggle();
});

$('.jar2').click(function(){
  $('.jar2').children('.toggle').slideToggle();
});

$('.jar3').click(function(){
  $('.jar3').children('.toggle').slideToggle();
});

$('.jar4').click(function(){
  $('.jar4').children('.toggle').slideToggle();
});

$('.jar5').click(function(){
  $('.jar5').children('.toggle').slideToggle();
});

$('.jar6').click(function(){
  $('.jar6').children('.toggle').slideToggle();
});

$('.jar7').click(function(){
  $('.jar7').children('.toggle').slideToggle();
});

$('.jar8').click(function(){
  $('.jar8').children('.toggle').slideToggle();
});

$('.jar9').click(function(){
  $('.jar9').children('.toggle').slideToggle();
});

$('.jar10').click(function(){
  $('.jar10').children('.toggle').slideToggle();
});

$('.jar11').click(function(){
  $('.jar11').children('.toggle').slideToggle();
});

$('.jar12').click(function(){
  $('.jar12').children('.toggle').slideToggle();
});

});
