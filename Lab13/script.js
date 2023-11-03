// Set the access token
mapboxgl.accessToken = 'pk.eyJ1IjoibGVhaGNoZW4iLCJhIjoiY2xuMXhxbDd5MDJoMjJqbmIyZ3BvaGdhdyJ9.caJH4T_iZebNdFvlAYkAOw'; 

// Initialize the map
var map = new mapboxgl.Map({
    container: 'YOUR-GIVEN-NAME',
    style: 'mapbox://styles/leahchen/cln6ae1jc072j01ns84moaou0',
    center: [-122.4421453585113, 37.77130969130856],
    zoom: 12     
});

map.on('load', function () {
  // MORE CODE WILL GO INSIDE HERE
      console.log('My name is Leah Chen');
      map.addSource('Historical_Restaurant_Scores', {
        'type': 'vector',
        'url': 'mapbox://leahchen.98262htj',
      });

      map.addLayer({
        'id':'HR_Scores',
        'type':'circle',
        'source':'Historical_Restaurant_Scores',
        'source-layer':'Historical_Restaurant_Scores_-atsmti',
        'paint':{
          'circle-radius': 2,
          'circle-color': [
            "case",
            ['<', ['get', 'inspecti_2'], 45], '#ccc',
            ['<', ['get', 'inspecti_2'], 80], '#440154',
            ['<', ['get', 'inspecti_2'], 85], '#3b528b',
            ['<', ['get', 'inspecti_2'], 90], '#21908d',
            ['<', ['get', 'inspecti_2'], 95], '#5dc963',
            '#fde725' 
          ]
        }
      });
});

map.on('mouseenter', 'HR_Scores', function(e) {
    var name = e.features[0]['properties']['business_n'];

    console.log(name);

    var textField = document.getElementById('restText');
    textField.innerHTML = name;
});
