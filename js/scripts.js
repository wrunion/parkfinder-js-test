/*How to get values from textboxes, dates, and drop downs:*/
var beverage = $("#beverage").val();

/*How to get values from radio buttons:*/
var flavor = $("input:radio[name=flavor]:checked").val();


/*How to get values from checkboxes:*/
var flavor = $("input:checkbox[name=flavor]:checked").val();

//
/*Sample script we may want to copy from*/
// <script type="text/javascript">
// function doSearch(roomquery) {
// alert('roomquery is ' + roomquery);
// }
// </script>
//
// how many rooms? <select onchange="doSearch(this.options[selectedIndex].text);">
//     <option>1</option>
//     <option>2</option>
// </select>
//Source: http: jsfiddle.net/H9jkd/

//Business Logic
//Creating the "Park" object constructor function. Reference: https://www.learnhowtoprogram.com/intro-to-programming-evening/object-oriented-javascript-3cb65911-fc7b-4e3d-ae84-8af3cbed4b34/constructors-and-prototypes
function Park(playground, parking, garden, restroom, accessibility, zone, pool) {
  this.playground = playground;
  this.parking = parking;
  this.garden = garden;
  this.restroom = restroom;
  this.accessibility = accessibility;
  this.zone = zone;
  this.pool = pool;
}

var rainbowPark = new Park(true, false, false, true, false, false, true);
var unicornPark = new Park(true, true, true, true, true, false, true);
var dragonPark = new Park(false, true, true, true, true, true, true);
var hobbitPark = new Park(true, true, true, true, true, false, false);
var galaxyPark = new Park(false, true, false, false, true, true, false);

//Functions for amenities checkboxes



// function rainbowPark() {
//   // var text = document.getElementById("playground");
//   var text = document.getElementById("rainbow-result");
//   text.style.display = "block";
//   // if (checkBox.checked == true) {
//   //   text.style.display = "block";
//   // } else {
//   //   text.style.display = "none";
//   // }
// }

// function rainbowPark() {
//   // Get the checkbox
//   var checkBox = document.getElementById("playground");
//   // Get the output text
//   var text = document.getElementById("rainbow-result");
//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == true) {
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }


// function showPlaygroundParks() {
//   rainbowPark();
// }


//Functions for park checkboxes
function showRainbowPark() {
  // Get the checkbox
  var checkBox = document.getElementById("rainbow");
  // Get the output text
  var text = document.getElementById("rainbow-result");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function showUnicornPark() {
  // Get the checkbox
  var checkBox = document.getElementById("unicorn");
  // Get the output text
  var text = document.getElementById("unicorn-result");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function showDragonPark() {
  // Get the checkbox
  var checkBox = document.getElementById("dragon");
  // Get the output text
  var text = document.getElementById("dragon-result");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function showHobbitPark() {
  // Get the checkbox
  var checkBox = document.getElementById("hobbit");
  // Get the output text
  var text = document.getElementById("hobbit-result");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function showGalaxyPark() {
  // Get the checkbox
  var checkBox = document.getElementById("galaxy");
  // Get the output text
  var text = document.getElementById("galaxy-result");
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

//UI Logic

// Resources:
//
// check out https//developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
