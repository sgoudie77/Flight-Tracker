import { CountUp } from './countUp.min.js';

// Set the starting map position and zoom ([lat, lon], zoom-level)
var map = L.map('map').setView([58.63121664342478, -93.77929687500001], 4);

// Add a default map from Map Tiler
const streets = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CFUEyunMBd2JLEvHOg9L', {
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



// Set bounds on map for markers to be displayed
// var corner1 = L.latLng(70.31873847853124, -141.94335937500003),
// corner2 = L.latLng(41.902277040963696, -34.89257812500001),
// bounds = L.latLngBounds(corner1, corner2);

// map.fitBounds([
//   [70.31873847853124, -141.94335937500003],
//   [41.902277040963696, -34.89257812500001]
// ]);


// Fetch API data
async function flightsData() {
  const apiResponse = await fetch('https://opensky-network.org/api/states/all');
  const result = await apiResponse.json();
  return await result.states;
}
// Get total length of objects in the array
async function flightsCount(data) {
  const counts = await data.length;
  console.log(counts);
  document.getElementById("loader").style.display = 'none';

  // Delay showing the refresh button until the page loads 
  setTimeout(showLatest, 5000);
  function showLatest() {
    document.getElementById('latest').style.opacity = 1;
  }

  return await counts;
}

async function displayTotalFlights(counts) {
  //Set variable for total flights
  const totalResults = await counts;
  //countUp display total number animation
  const options = {
    startVal: 0,
    decimalPlaces: 0,
    duration: 8,
    useEasing: true,
    separator: ',',
  };
  
  const countUp = new CountUp('total', await totalResults, options);
  console.log(countUp);
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
}

//document.getElementById('total').innerHTML = await totalResults;
//displayTotalFlights(flightsCount(flightsData()));

//Set the icon for each flight reporting data
var aircraftTracked = L.icon ({
  iconUrl: 'ac-black.png',
  iconSize: [18, 12]
});

// Set the icon for mouseover
var aircraftHover = L.icon ({
  iconUrl: 'ac-blue.png',
  iconSize: [18, 12] 
});


async function displayMarkers(data) {
  //Loop through the array and set an icon for each flight using the lat and lon coords of each object
  let noCoordinates = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i][5] != null && data[i][6] != null) {
      let displayedFlight = new L.marker([data[i][6],data[i][5]], {icon: aircraftTracked}).addTo(map)
      .bindPopup(`<p>Flight Number: ${data[i][1]}</p>
                  <p>Origin Country: ${data[i][2]}</p>
                  <p>Altitude: ${ Math.floor(data[i][7] * 3.28084) } feet</p>`);
    } else {
      noCoordinates++;
    }
  }
  console.log(`There are ${noCoordinates} that don't have coordinates.`)
}

//Finds flight total and display markers
async function displayFlightsandTotal() {
  const data = await flightsData();
  const count = await flightsCount(data);
  displayTotalFlights(count);
  displayMarkers(data);
}

displayFlightsandTotal();