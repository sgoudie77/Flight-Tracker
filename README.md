# Flight Tracker

## Overview
An aviation site that can display flight information and airport data.

## Project Goals
Allow users to search for flight information, such as callsigns, altitude, heading and schedule, as well as airport information about the arrivals, departures, incident reports, and runways.

## Features
- Home page with map of Canada displaying all active flights
  - real time data of flights from [Opensky Network API](opensky-network.org)
  - refresh button
- Flight search
  - search for flight information using callsigns (IATA or ICAO), altiutude, heading, speed, location, and schedule information (i.e. early, on time, delayed)
  - search result information to be displayed from the Opensky Network API
- Airport search
  - search for information using airport name or code (i.e. IATA or ICAO)
  - display airport information, such as the number, heading, length and name of active runways, as well as terminals, and schedule information (e.g. delays) 
  - search result information to be displayed from the Opensky Network API
  
 ## Out Of Scope
 - No commerical ticket search or purchase options will be included in this site
 - No reliable tracking of non-commerical, military, light or small aircraft will be included in this site

## Limitations
- This app can only retrieve data with a time resultion of 5 seconds according to the limitations of use of the OpenSky Netowrk API, so flights are not tracked and displayed exactly in real time.
 
 ## Tech To Use
 - HTML5
 - CSS3
 - JavaScript
 - Leaflet.js
 - Countup.js
 - Opensky Network API
