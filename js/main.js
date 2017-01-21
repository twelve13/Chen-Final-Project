//Declare all your variables
var incomeAmount = 0;
var allocations = [];
var labels = [];
var showAmount = 0;
var amountsArray = [];
var labelsArray = [];



//when Setup button is clicked, have the setup form slide down
$('#setup').click(function() {
  $('#setup-form').slideDown();
});

//when Setup form is submitted, all fields with percentage-item class will get pulled into an array called items
$('#setup-form').submit(function(event) {
  console.log("setup form submitted");
  allocations = $('.percentage-item');
  labels = $('.name-item');
  var displayLabels = $('.show-label');
  for (var i=0; i < labels.length; i++) {
      var labelName = $(labels[i]).val();
labelsArray.push(labelName);
      $(displayLabels[i]).html(labelName);
    //  $('.show-label').html(label);
    }
  $('#setup-form').slideUp();
  event.preventDefault();
});

//when Income button is clicked, have the income form slide down
$('#income').click(function() {
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
