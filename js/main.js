//when Setup button is clicked, have the setup form slide down
$('#setup').click(function() {
  $('#setup-form').slideDown();
});

$('#setup_done').click(function() {
  $('#setup-form').slideUp();
});

//make forms functional
var incomeAmount = 0;
var percentageJar1 = 0;
var incomeJar1 = 0;
var totalJar1= 0;
var percentageJar2 = 0;
var incomeJar2 = 0;
var totalJar2 = 0;
var percentageJar3 = 0;
var incomeJar3 = 0;
var totalJar3 = 0;
var percentageJar4 = 0;
var incomeJar4 = 0;
var totalJar4 = 0;
var items = [];

$('#setup-form').submit(function(event) {
  console.log("test!!");
  percentageJar1 = $('#percentage-item1').val();
  percentageJar2 = $('#percentage-item2').val();
  percentageJar3 = $('#percentage-item3').val();
  percentageJar4 = $('#percentage-item4').val();
  items = $('.percentage-item');
  event.preventDefault();
});


$('#income').click(function() {
  $('#income-form').slideDown();
})

$('#income_setup_done').click(function() {
  $('#income-form').slideUp();
});

$('#income-form').submit(function(event) {
  incomeAmount = $('#income-entry').val();
  var displays = $('.show-amount');
  for (var h=0; h < items.length; h++) {
    var item = $(items[h]).val();
      console.log('This is what ITEM is equal to: ' + item);

    var incomeJar = incomeAmount * item;
      console.log('This is what the income times each item is: ' + incomeJar);
      // console.log(parseInt($(displays[h]).html()));
      var showAmount;
      var currentJarAmmount = parseFloat($(displays[h]).html());
      if (isNaN(currentJarAmmount)) {
        showAmount = incomeJar
      } else {
        showAmount = currentJarAmmount + incomeJar;
      }

    // $(displays[h]).html(showAmount);
    $(displays[h]).html(showAmount);
    event.preventDefault();
  }

  //arrayName.push(percentageJar1);
  // // console.log (arrayName);
  // incomeJar1 = percentageJar1 * incomeAmount;
  // totalJar1 = totalJar1 + incomeJar1;
  // console.log(totalJar1);
  // $('.show-amount1').html(totalJar1);
  // incomeJar2 = percentageJar2 * incomeAmount;
  // totalJar2 = totalJar2 + incomeJar2;
  // $('.show-amount2').html(totalJar2);
  // event.preventDefault();
});
//$('#income').click(function(){
//var math = 2*percentageJar1;
//console.log(math);
//});


$('.jar').click(function() {
    $('.adjust').show();
});


//(issue?) I was going to have separate buttons for Setup (setting up the item names, goals, and percentages)
//and for Income (specify income amount and add amounts to jars)
//but I'm realizing I don't know how to cross-reference the info from different submit events...

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
