var config = {
    style: 'mapbox://styles/leahchen/cln68m7yk06xu01ma4x1824xl',
    accessToken: 'pk.eyJ1IjoibGVhaGNoZW4iLCJhIjoiY2xuMXhxbDd5MDJoMjJqbmIyZ3BvaGdhdyJ9.caJH4T_iZebNdFvlAYkAOw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'NYC Public Housing Flood Risk',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Leah Chen',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',

    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'NYC Public Housing Flood Risk',
            image: 'images/Sandy1.jpg',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents <a href = "https://www1.nyc.gov/site/nycha/about/press/pr-2012/nycha-has-restored-power-to-buildings-affected-by-hurricane-sandy.page">without power for days or even weeks]</a>. New York City Housing Authority public housing developments were affected. <a href="https://furmancenter.org/files/publications/SandysEffectsOnHousingInNYC.pdf">24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the <a href="https://www.nytimes.com/2017/04/18/magazine/when-rising-seas-transform-risk-into-certainty.html">promise</a> of more flooding, which areas and <i>who</i> will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.93379, 40.68800],
                zoom: 10,
                pitch: 54,
                bearing: -14.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Manhattan Public Housing Flood Risk',
            image: 'images/Sandy2.jpg',
            description: 'After Hurricane Sandy, large portions of Manhattan were without electricity.',
            location: {
                center: [-73.99368, 40.73348],
                zoom: 12.50,
                pitch: 54,
                bearing: -14.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FutureFloodplains_2050_500yr',
                    opacity: 1
                }
        ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Brooklyn Public Housing Flood Risk',
            image: 'images/Sandy3.jpg',
            description: 'Many public housing complexes, including this one in Brooklyn, were without power and heat for weeks after the storm.',
            location: {
                center: [-73.86156, 40.63455],
                zoom: 12.5,
                pitch: 54,
                bearing: -14
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'fully',
            hidden: false,
            title: 'Bronx Public Housing Flood Risk',
            image: 'images/Sandy4.jpg',
            description: 'The Major Deegan Expressway underwater.',
            location: {
                center: [-73.90149, 40.82516],
                zoom: 13.00,
                pitch: 35,
                bearing: -8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook Houses',
            image: 'images/Sandy5.jpg',
            description: 'The Red Hook Houses are two connected public housing complexes located in Red Hook, Brooklyn, New York City. Managed by the New York City Housing Authority (NYCHA), they comprise the largest housing development in Brooklyn.',
            location: {
                center: [-74.00475671799066, 40.67522890608036],
                zoom: 17,
                pitch: 50,
                bearing: -8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
