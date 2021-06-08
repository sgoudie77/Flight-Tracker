// Set the starting map position and zoom ([lat, lon], zoom-level)
var map = L.map('map').setView([58.63121664342478, -93.77929687500001], 3);

// Add a default map from Map Tiler
streets = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CFUEyunMBd2JLEvHOg9L', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    crossOrigin: true
}).addTo(map);

// Check the coordinates of a position on click
map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    console.log("You clicked the map at latitude and longitude: " + lat + ", " + lng);
});

async function flightsData() {
  const apiResponse = await fetch('https://opensky-network.org/api/states/all');
  const result = await apiResponse.json();
  console.log(result);
  return await result;
}

async function flightsCount(data) {
  const flightsData = await data;
  const counts = await flightsData.states.length;
  console.log(counts);
  return await counts;
}

async function displayTotalFlights(counts) {
  //Set variable for total flights
  const totalResults = await counts;
  //Display number of total flights using a div id
  document.getElementById('total').innerHTML = await totalResults;
}

displayTotalFlights(flightsCount(flightsData()));

// //Set the icon for each active flight
// var aircraftTracked = L.icon ({
//   iconUrl: 'ac-black.png',
//   iconSize: [24, 18]
// });

// //Loop through the array and set an icon for each flight using the lat and lon coords of each object
// for (var i = 0; i < flights.length; i++) {
//   var displayedFlight = new L.marker([flights[i][5],flights[i][6]], {icon: aircraftTracked}).addTo(map)
//   .bindPopup(flights[i][1],flights[i][2],flights[i][7]);
// }
