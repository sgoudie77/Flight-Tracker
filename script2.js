// Set variables for api
//let url = 'http://api.aviationstack.com/v1/flights',
//  qString = '?access_key=' + '046713ea22076c597022482282a4f711'

// Set variable for the flight searchbox input
//const searchboxFlight = document.querySelector('.search-box-flights');
// searchboxFlight.addEventListener('keypress', getFlightQuery);

// Search button linked to flights search bar
// document.querySelector('.search-box-flights button').addEventListener('click', function () {
//     getFlightResults();
// });

// Get results when enter key is pressed in flights search
// function getFlightQuery(e){
//     if (e.keyCode == 13) {
//         getFlightResults();
//     }
// }

// Fetch request to the API to get the data
// function getFlightResults() {
//     fetch(url + qString)
//         .then(function(resp) {
//             return resp.json();
//         })
//         .then(function(data) {
//             console.log(data); 
//             for (var i = 0; i < arrayLength; i++) {
//                 if (find(searchboxFlight.value == -1)) {
//                     alert('No flight information found');
//                 } else if (find(searchboxFlight.value)) {
//                     displayFlightResults();
//                 }
//             }
//         })
// }

// Convert date and time string to new format for display
// var dateFormat = new Date(`${data.data[0].departure.scheduled, data.data[0].departure.estimated, data.data[0].arrival.schedule, data.data[0].arrival.estimated}`).toLocaleDateString("sq-AL",{ 
//     weekday: 'short',
//     year: 'numeric', 
//     month: 'short', 
//     day: '2-digit', 
//     hour: '2-digit', 
//     minute: '2-digit', 
//     timeZoneName: 'short' 
// });

// Set variables to display the flight information results
// function displayFlightResults(data) {
//     let airlineName = document.getElementById('airline-title');
//     airlineName.innerHTML = `${data.data.airline.name}`;

//     let flightNumber = document.getElementById('flight-number');
//     flightNumber.innerHTML = `${data.data.flight.iata}`;

    // departure info section
    // let departureAirport = document.querySelector('#dep-airport');
    // departureAirport.innerHTML = `${data.data.departure.airport}`;

    // let departureTerminal = document.querySelector('#dep-terminal');
    // departureTerminal.innerHTML = `${data.data.departure.terminal}`;

    // let departureGate = document.querySelector('#dep-gate');
    // departureGate.innerHTML = `${data.data.departure.gate}`;

    // let departureStatus = document.querySelector('#status');
    // departureStatus.innerHTML = `${data.data.flight_status}`;

    // let scheduledDeparture = document.querySelector('#dep-time-sch');
    // scheduledDeparture.innerHTML = `${data.data.departure.scheduled}`;

    // let estimatedDeparture = document.querySelector('#dep-time-est');
    // estimatedDeparture.innerHTML = `${data.data.departure.estimated}`;

    // let departureDelay = document.querySelector('#dep-delay');
    // departureDelay.innerHTML = `${data.data.departure.delay}minutes`;

    // arrival info section
//     let arrivalAirport = document.querySelector('#arr-airport');
//     arrivalAirport.innerHTML = `${data.data.arrival.airport}`;

//     let arrivalTerminal = document.querySelector('#arr-terminal');
//     arrivalTerminal.innerHTML = `${data.data.arrival.terminal}`;

//     let arrivalGate = document.querySelector('#arr-gate');
//     arrivalGate.innerHTML = `${data.data.arrival.gate}`;

//     let arrivalBag = document.querySelector('#bag');
//     arrivalBag.innerHTML = `${data.data.arrival.baggage}`;

//     let scheduledArrival = document.querySelector('#arr-time-sch');
//     scheduledArrival.innerHTML = `${data.data.arrival.schedule}`;

//     let estimatedArrival = document.querySelector('#arr-time-est');
//     estimatedArrival.innerHTML = `${data.data.arrival.estimated}`;

//     let arrivalDelay = document.querySelector('#arr-delay');
//     arrivalDelay.innerHTML = `${data.data.arrival.delay}minutes`;
// }

// displayFlightResults();

// hamburger menu toggle
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}





// Search button linked to flights search bar
//document.querySelector('.search-box-flights button').addEventListener('click', function () {
    // for (var i = 0; i < arrayLength; i++) {
    //     if (e.keyCode == 13 && find(searchboxFlight.value) == -1) {
    //         alert('No flight information found');
    //         return document.getElementById('airline-title').innerHTML = 'no flight data found';
    //     } else if (find(searchboxFlight.value)) {
    //         getFlightResults();
    //     }
    // } 
//});

// Get results when enter key is pressed in flights search
// function getFlightQuery(e){
//     for (var i = 0; i < arrayLength; i++) {
//         if (e.keyCode == 13 && find(searchboxFlight.value) == -1) {
//             alert('No flight information found');
//             return document.getElementById('airline-title').innerHTML = 'no flight data found';
//         } else if (find(searchboxFlight.value)) {
//             getFlightResults();
//         }
//     }
// }

// Search button linked to flights search bar
// document.querySelector('.search-box-flights button').addEventListener('click', function () {
//     if (searchboxFlight.value == data.data[0].flight.iata && data.data[0].flight.iata == null) {
//         return document.getElementById('airline-title').innerHTML = 'no flight data found';
//     } else if (searchboxFlight.value == data.data[0].flight.iata) {
//         getFlightResults();
//     }
// });

// const api = {
//     key: "046713ea22076c597022482282a4f711",
//     base: "http://api.aviationstack.com/v1/flights"
// }

// Get results when enter key is pressed in flights search
// function getFlightQuery(e) {
//     if (e.keyCode == 13 && searchboxFlight.value == data.data[0].flight.iata && data.data[0].flight.iata == null) {
//         return document.getElementById('airline-title').innerHTML = 'no flight data found';
//     } else if (searchboxFlight.value == data.data[0].flight.iata) {
//         getFlightResults();
//     }
// }

// Get results when enter key is pressed in flights search
// function setQueryFlights(e) {
//     if (e.keyCode == 13 && data == "")  {
//         return airlineName.innerText = `<p>no result found</p>`;
//     } else if (e.keyCode == 13 && searchbox.value == data.flight[1]) {
//         getResults();
//     }
// }

// Fetch request to the API to get the data
// function getResults (query) {
//     fetch(`${api.base}?access_key=${api.key}`).then(data => {
//         return data.json();
//     }).then(displayResultsFlights);
// }

let flightSearchQuery = document.querySelector("#flight-search-query");

let flight = {
    fetchFlight: function() {
        fetch(
            `http://api.aviationstack.com/v1/flights?access_key=046713ea22076c597022482282a4f711&flight_iata=${flightSearchQuery.value}`
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const { name } = data.data[0].airline;
            const { iata } = data.data[0].flight;
            console.log(name, iata);
            document.getElementById('airline-title').innerText = name;
            document.getElementById('flight-number').innerText = iata;
        })
    }
};
