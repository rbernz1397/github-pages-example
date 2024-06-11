console.log('something')
let newYorkCoords = [40.73, -74.0059];
let mapZoomLevel = 12;

var map = L.map('map-id').setView(newYorkCoords, mapZoomLevel);

  // Create the tile layer that will be the background of our map.
const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

d3.json('https://gbfs.citibikenyc.com/gbfs/en/station_information.json').then(jsonData => {

  // get the data for the stations
  const stationsArray = jsonData.data.stations

  //mapping through all the stations and adding a marker for each (mapping adds all of these values into an array(a list))
  const markerArray = stationsArray.map(station => {
    return L.marker([station.lat, station.lon])
      .bindPopup(`<b>${station.name}</b><br>${station.capacity}`)

  });

  var stationMarkerLayer = L.layerGroup(markerArray);
  stationMarkerLayer.addTo(map);

  // Create a baseMaps object to hold the lightmap layer.
  var baseMaps = {
    "OpenStreetMap": tileLayer
  };

   // Create an overlayMaps object to hold the bikeStations layer.
  var overlayMaps = {
    "Bike Stations": stationMarkerLayer
  };

  var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

})

// Create the createMap function.

  



  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
