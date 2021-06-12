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

//Set variable for all flights in the API array
//let flights;
//let totalResults;

// fetch('https://opensky-network.org/api/states/all')
//   .then(response => response.json())
//   .then(data => console.log(data))
  //.then(console.log(flights))
  //.then(totalResults = flights.length);

//Set variable for total flights
//let totalResults = flights.length;

//Display number of total flights using a div id
//document.getElementById('total').innerHTML = totalResults;

//Set the icon for each active flight
var aircraftTracked = L.icon ({
  iconUrl: 'ac-black.png',
  iconSize: [24, 18]
});

//Loop through the array and set an icon for each flight using the lat and lon coords of each object
// for (var i = 0; i < flights.length; i++) {
//   var displayedFlight = new L.marker([flights[i][5],flights[i][6]], {icon: aircraftTracked}).addTo(map)
//   .bindPopup(flights[i][1],flights[i][2],flights[i][7]);
// }


// const api = {
//   apiKey: '046713ea22076c597022482282a4f711m',
//   base: 'http://api.aviationstack.com/v1/flights'
// }

// function getResults () {
// fetch(`${api.base}?access_key=${api.apiKey}`)
// .then(response => response.json())
// .then(data => console.log(data));

// function displayFlights () {
//   let total = document.querySelector('#total');
//   total.innerText = data.length;    
// }

  // displayFlights: function(data) {
  //   const { total } = data.length;
  //   document.querySelector('#total').innerHTML = "Total Flights " + total;
  // }


// fetch('https://opensky-network.org/api/states/all')
//   .then(response => response.json())
//   .then(data => console.log(data));


// fetch('http://api.aviationstack.com/v1/flights?access_key=046713ea22076c597022482282a4f711')
//   .then(response => response.json())
//   .then(data => console.log(data));

// let flights = {
//    apiKey: '046713ea22076c597022482282a4f711',
//    fetchFlights: function () {
//     fetch('https://opensky-network.org/api/states/all')
//     .then((response) => response.json())
//     .then((data) => this.displayFlights(data));
//    },
//    displayFlights: function(data) {
//     const { total } = data.states.length; 
//     console.log(total);
//     document.querySelector('#total').innerHTML = total;
//    }
// };

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
    const totalResults = await counts;
    document.getElementById('total').innerHTML = await totalResults;
}

displayTotalFlights(flightsCount(flightsData()));

// for (let i = 0; i < flightsData.states.length; i++) {
//     var aircraftTracked = new L.marker(flightsData.states[i][5], flightsData.states[i][6]);
// }

var activeFlights = flightsData.states[5, 6];

var displayFlights = createMarkerGroup(activeFlights);