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

//Simple functions to show the parks
function showRainbowPark() {
  var text = document.getElementById("rainbow-result");
  text.style.display = "block";
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
  var text = document.getElementById("rainbow-result");
  text.style.display = "none";
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

//To hide all divs if nothing is checked
function hideAll() {
  hideDragonPark();
  hideGalaxyPark();
  hideHobbitPark();
  hideRainbowPark();
  hideUnicornPark();
}

var parksArray = [];

// var parksChecked = function() {
//   var checked = $("input:checkbox[name=parks]:checked").val();
//   checked.forEach
// };

if (parksArray === null) {
  hideAll();
}
