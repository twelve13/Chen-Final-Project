$(document).ready(function(){

//Declare all the variables that will be referenced
var incomeAmount = 0;
var allocations = [];
var labels = [];
var showAmount = 0;
var amountsArray = [];
var labelsArray = [];

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
//a variable called "displayLabels" is created that pulls all the divs with "show-label" class - this is where the labels for the jars will show up
  var displayLabels = $('.show-label');
//for every item in the "labels" array, the value of what was entered in the field of the form gets put into a variable called "labelName"
//that gets put into the displayLabels variable so the names show up on the labels for the jars
  for (var i=0; i < labels.length; i++) {
      var labelName = $(labels[i]).val();
labelsArray.push(labelName);
      $(displayLabels[i]).html(labelName);
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
amountsArray.push(showAmount);
    $(displays[h]).html(showAmount);

  }
  $('#income-form').slideUp();
  event.preventDefault();
});

//this is where I'm running into trouble.  I can't figure out how to pull the current amount of the jar so I can do further math with it.
$('.jar1').click(function() {

  $('.jar-info').show();
  $('.info-label').html("<p>Jar Name: </p>" + labelsArray[0]);
  $('.info-amount').html("<p>current amount is: </p>" + amountsArray[0]);
  console.log(showAmount);
});

$('.jar2').click(function() {
  var goalItem2 = $('#goal-item2').val();
  $('.info-label').html("<p>Jar Name: </p>" + labelsArray[1]);
  $('.info-goal').html("<p>Goal is: </p>" + goalItem2);
  $('.info-amount').html("<p>Current Amount is: </p>" + amountsArray[1]);
});

$('.jar3').click(function() {
  $('.info-label').html("<p>Jar Name: </p>" + labelsArray[2]);
  $('.info-amount').html("<p>current amount is: </p>" + amountsArray[2]);

});

});

//the original plan:
//when Setup form Submit button is clicked:
//create var labelItem1 that will take input from what's entered in form for name-item1
//target jar1 and change <p> from Label 1 to var labelItem1
//create var goalItem1 that will take input from what's entered in form for goal-item1
//figure out how I want to display goalItem1 value - would like to display as part of hover function if possible
//create var percentageJar1 that will take value from what's entered in form for percentage-item1 (issue?)
//repeat for all items

//when Income button is clicked, have income form slide down: will have field for income amount
//when Income form Submit button is clicked:
//create var incomeTotal that will take input from what's entered in income field
//create var incomeJar1 that will do incomeTotal * percentageJar1 (issue?)
//create var amountJar1 that will have an initial value of 0.  amountJar1 will = amountJar1 + incomeJar1 so that the amount adds up as Income button is clicked
//figure out how I want to display amountJar1 - would like to display as part of hover function along with goalItem1 value
//repeat for all items

//when you click on each jar, these will appear and will act like mini forms:
  //amount
  //add
  //subtract
  //log

  //when add button is clicked
  //amountJar# will = amountJar# + value entered in field
  //when subtract button is clicked
  //amountJar# will = amountJar# - value entered in field
  //when log button is clicked
  //field will appear to allow you to enter note (description of bill paid or purchase made) and this will get logged somewhere.  i have no idea how.
