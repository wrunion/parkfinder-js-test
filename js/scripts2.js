//Business Logic
function Park(playground, parking, garden, restroom, accessibility, zone, pool) {
  this.playground = playground;
  this.parking = parking;
  this.garden = garden;
  this.restroom = restroom;
  this.accessibility = accessibility;
  this.zone = zone;
  this.pool = pool;
}

//Create a new object for each park
var rainbowPark = new Park(true, false, true, true, false, true, true);
var unicornPark = new Park(true, true, false, true, true, false, true);
var dragonPark = new Park(false, true, true, true, false, true, true);
var hobbitPark = new Park(true, false, true, true, true, false, false);
var galaxyPark = new Park(false, true, true, true, false, true, false);

//Create an array of park keywords for manipulating the HTML
var parks = ["rainbow", "unicorn", "dragon", "hobbit", "galaxy"];

//To show all parks with jQuery
function showAllParks() {
  parks.forEach(function(park) {
    $("#" + park + "-result").show();
  });
}

//To hide all parks with jQuery
function hideAllParks() {
  parks.forEach(function(park) {
    $("#" + park + "-result").hide();
  });
}



// function showPark(park) {
//   var text = document.getElementById(park + "-result");
//   text.style.display = "block";
// }

// parks.forEach(function() {
//
// });



//Simple functions to show the parks
function showRainbowPark() {
  $("#rainbow-result").show();
}

function showUnicornPark() {
  $("#unicorn-result").show();
}



function showUnicornPark() {
  var text = document.getElementById("unicorn-result");
  text.style.display = "block";
}

function showDragonPark() {
  var text = document.getElementById("dragon-result");
  text.style.display = "block";
}

function showHobbitPark() {
  var text = document.getElementById("hobbit-result");
  text.style.display = "block";
}

function showGalaxyPark() {
  var text = document.getElementById("galaxy-result");
  text.style.display = "block";
}

//Simple functions to hide the parks
function hideRainbowPark() {
  $("#rainbow-result").hide();
}

function hideUnicornPark() {
  var text = document.getElementById("unicorn-result");
  text.style.display = "none";
}

function hideDragonPark() {
  var text = document.getElementById("dragon-result");
  text.style.display = "none";
}

function hideHobbitPark() {
  var text = document.getElementById("hobbit-result");
  text.style.display = "none";
}

function hideGalaxyPark() {
  var text = document.getElementById("galaxy-result");
  text.style.display = "none";
}

//Complex functions sorted by feature
function showPlayground() {
  var checkBox = document.getElementById("playground");
  var text = document.getElementById("playground-result");
  if (checkBox.checked == true){
  text.style.display = "block";
  } else {
   text.style.display = "none";
 }
}


function showAccessibility() {
  $("hobbit-result").show();
  $("dragon-result").hide();
}

//To hide all divs if nothing is checked
function hideAll() {
  hideDragonPark();
  hideGalaxyPark();
  hideHobbitPark();
  hideRainbowPark();
  hideUnicornPark();
}



// var parksChecked = function() {
//   var checked = $("input:checkbox[name=parks]:checked").val();
//   checked.forEach
// };

// if (parksArray === null) {
//   hideAll();
// }
//
// var parksArray = [];

//UI Logic
$(document).ready(function() {
  $(".hidden").hide();
  // $("form").submit(function(event) {
  //   event.preventDefault();
  //   $("input:checkbox[name=toppings-deluxe]:checked").each(function() {
  //      toppingsArray.push($(this).val());
  //    });
  //
  //
  //
  // });
});
