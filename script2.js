const api = {
    key: "046713ea22076c597022482282a4f711",
    base: "https://api.aviationstack.com/v1/flights"
}

// Set variable for the flights searchbox input
const searchbox = document.querySelector('.search-box-flights');
searchbox.addEventListener('keypress', setQueryFlights);

// Search button linked to flights search bar
document.querySelector('.search-box-flights button').addEventListener('click', function () {
    if (searchbox.value == data.flight[1]) {
    getResults(searchbox.value);
    }
});

// Get results when enter key is pressed in flights search
function setQueryFlights(e) {
    if (e.keyCode == 13 && searchbox.value == data.flight[1]) {
        getResults(searchbox.value);
    }
}

// Fetch request to the API tp get the data
function getResults (query) {
    fetch(`${api.base}?access_key=${api.key}`).then(data => {
        return data.json();
    }).then(displayResultsFlights);
}

// Set variables to display the flight information results
function displayResultsFlights (data) {
    let airlineName = document.querySelector('#airline-title');
    airlineName.innerText = `${data.airline[0]}`;

    let flightNumber = document.querySelector('#flight-number');
    flightNumber.innerText = `${data.flight[1]}`

    // departure info section
    let departureAirport = document.querySelector('#dep-airport');
    departureAirport.innerText = `${data.departure[0]}`;

    let departureTimezone = document.querySelector('#dep-tz');
    departureTimezone.innerText = `${data.departure[1]}`;

    let departureTerminal = document.querySelector('#dep-terminal');
    departureTerminal.innerText = `${data.departure[4]}`

    let departureGate = document.querySelector('#dep-gate');
    departureGate.innerText = `${data.departure[5]}`;

    let departureStatus = document.querySelector('#status');
    departureStatus.innerText = `${data.flight_status}`;

    let scheduledDeparture = document.querySelector('#dep-time-sch');
    scheduledDeparture.innerText = `${data.departure[7]}`;

    let actualDeparture = document.querySelector('#dep-time-act');
    actualDeparture.innerText = `${data.departure[9]}`;

    let departureDelay = document.querySelector('#dep-delay');
    departureDelay.innerText = `${data.departure[6]}minutes`;

    // arrival info section
    let arrivalAirport = document.querySelector('#arr-airport');
    arrivalAirport.innerText = `${data.arrival[0]}`;

    let arrivalTimezone = document.querySelector('#arr-tz');
    arrivalTimezone.innerText = `${data.arrival[1]}`;

    let arrivalTerminal = document.querySelector('#arr-terminal');
    arrivalTerminal.innerText = `${data.arrival[4]}`;

    let arrivalGate = document.querySelector('#arr-gate');
    arrivalGate.innerText = `${data.arrival[5]}`;

    let arrivalBag = document.querySelector('#bag');
    arrivalBag.innerText = `${data.arrival[6]}`;

    let scheduledArrival = document.querySelector('#arr-time-sch');
    scheduledArrival.innerText = `${data.arrival[8]}`;

    let estimatedArrival = document.querySelector('#arr-time-est');
    estimatedArrival.innerText = `${data.arrival[9]}`;

    let arrivalDelay = document.querySelector('#arr-delay');
    arrivalDelay.innerText = `${data.arrival[7]}minutes`;
}