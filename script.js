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
  return await result.states;
}

async function flightsCount(data) {
  const counts = await data.length;
  console.log(counts);
  return await counts;
}

async function displayTotalFlights(counts) {
  //Set variable for total flights
  const totalResults = await counts;
  //Display number of total flights using a div id
  document.getElementById('total').innerHTML = await totalResults;
}

//displayTotalFlights(flightsCount(flightsData()));

//Set the icon for each active flight
var aircraftTracked = L.icon ({
  iconUrl: 'ac-black.png',
  iconSize: [24, 18]
});

async function displayMarkers(data) {
  //Loop through the array and set an icon for each flight using the lat and lon coords of each object
  let noCoordinates = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i][5] != null && data[i][6] != null) {
      console.log(data[i][6], data[i][5])
      let displayedFlight = new L.marker([data[i][6],data[i][5]], {icon: aircraftTracked}).addTo(map)
      .bindPopup(data[i][1],data[i][2],data[i][7]);
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
