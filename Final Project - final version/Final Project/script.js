var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        var options = {};
        if (layer.duration) {
            var transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute

    ('id', 'features');

var header = document.createElement('div');
var blackbox = document.createElement('div');
blackbox.id = 'blackbox';
header.appendChild(blackbox);

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (config.para1) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para1;
    header.appendChild(bylineText);
}

if (config.para2) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para2;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.title) {
        var title = document.createElement('h2');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    if (record.video) {
        var videoDiv = document.createElement('div');
        videoDiv.setAttribute('class', 'videoContainer');
        video = document.createElement('video');
        video.controls = true;
        video.autoplay = true;
        video.loop = true;
        video.src = record.video;
        videoDiv.appendChild(video)
        chapter.appendChild(videoDiv);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

/*var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}*/

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
        url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});
var layers = {
    'first-chapter': ['Means_Trans'], // Replace with your layers
    'second-chapter': ['BART_Data']  // Replace with your layers
};

// Create a inset map if enabled in config.js
if (config.inset) {
    var insetMap = new mapboxgl.Map({
        container: 'mapInset', // container id
        style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
        center: config.chapters[0].location.center,
        // Hardcode above center value if you want insetMap to be static.
        zoom: 3, // starting zoom
        hash: false,
        interactive: false,
        attributionControl: false,
        //Future: Once official mapbox-gl-js has globe view enabled,
        //insetmap can be a globe with the following parameter.
        //projection: 'globe'
    });
}

/*if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}*/

// instantiate the scrollama
var scroller = scrollama();


map.on("load", function () {
    map.addSource('Means_of_Transportation', {
        'type': 'vector',
        'url': 'mapbox://leahchen.3h3okecg'
    });

    map.addSource('BART_Data_S2019_Time', {
        'type': 'vector',
        'url': 'mapbox://leahchen.7623fjtd'
    });

    map.addSource('Senior_Change_per', {
        'type': 'vector',
        'url': 'mapbox://leahchen.04t1ferc'
    });

    map.addLayer({
        'id': 'Means_Trans',
        'type': 'fill',
        'source': 'Means_of_Transportation',
        'source-layer': 'Means_of_Transportation-3qouh2', 
        'paint': {
            'fill-color': [
                "case",
                ['==', ['get', 'Car_per'], 0], 'rgba(0, 0, 0, 0)',
                ['<', ['get', 'Car_per'], 0.2], '#FCFBFD',
                ['<', ['get', 'Car_per'], 0.4], '#DADAEB',
                ['<', ['get', 'Car_per'], 0.6], '#9E9AC8',
                ['<', ['get', 'Car_per'], 0.8], '#6A51A3',
                ['<', ['get', 'Car_per'], 1], '#3F007D',
                'rgba(0, 0, 0, 0)'
            ]
        }
    });

    map.addLayer({
        'id': 'Means_Trans2',
        'type': 'fill',
        'source': 'Means_of_Transportation',
        'source-layer': 'Means_of_Transportation-3qouh2',
        'paint': {
            'fill-color': [
                "case",
                ['==', ['get', 'Public_per'], 0], 'rgba(0, 0, 0, 0)',
                ['<', ['get', 'Public_per'], 0.0555], '#FFF7F3',
                ['<', ['get', 'Public_per'], 0.1405], '#FCC5C0',
                ['<', ['get', 'Public_per'], 0.2472], '#F768A1',
                ['<', ['get', 'Public_per'], 0.3845], '#AE017E',
                ['<', ['get', 'Public_per'], 0.6959], '#49006A',
                'rgba(0, 0, 0, 0)'
            ]
        }
    });

    map.setLayoutProperty('Means_Trans', 'visibility', 'none');

    // Monitor scroll events to switch layers
    window.addEventListener('scroll', function () {
        var chapter1 = document.getElementById('first-chapter');
        var chapter2 = document.getElementById('second-chapter');

        if (isElementInViewport(chapter2) && !isElementInViewport(chapter1)) {
            // at chapter 2，close Means_Trans and open Means_Trans2
            map.setLayoutProperty('Means_Trans', 'visibility', 'none');
            map.setLayoutProperty('Means_Trans2', 'visibility', 'visible');
        } else {
            // open Means_Trans and close Means_Trans2 when it get back
            map.setLayoutProperty('Means_Trans', 'visibility', 'visible');
            map.setLayoutProperty('Means_Trans2', 'visibility', 'none');
        }
    });


    window.addEventListener('scroll', function () {
        var chapterinter = document.getElementById('interlude');
        var chapterinter2 = document.getElementById('interlude2');
        var chapter3 = document.getElementById('third-chapter');
        var chapter4 = document.getElementById('fourth-chapter');
        var chapter5 = document.getElementById('fifth-chapter');
        var chapter6 = document.getElementById('sixth-chapter');
        var chapterinter3 = document.getElementById('interlude3');
        var chapterinter4 = document.getElementById('interlude4');
        var chapterinter5 = document.getElementById('interlude5');
        var chapterinter6 = document.getElementById('interlude6');
        var chapterinter7 = document.getElementById('interlude7');
        var chapterinter8 = document.getElementById('interlude8');
        var chapterinter9 = document.getElementById('interlude9');

        if (isElementInViewport(chapterinter) || isElementInViewport(chapterinter2) || isElementInViewport(chapter3) || isElementInViewport(chapter4) || isElementInViewport(chapter5) || isElementInViewport(chapter6) || isElementInViewport(chapterinter3) || isElementInViewport(chapterinter4) || isElementInViewport(chapterinter5) || isElementInViewport(chapterinter6) || isElementInViewport(chapterinter7) || isElementInViewport(chapterinter8) || isElementInViewport(chapterinter9)) {
            map.setLayoutProperty('Means_Trans', 'visibility', 'none');
        }
    });

    map.addSource('BART_Station', {
        'type': 'vector',
        'url': 'mapbox://leahchen.cljpav04'
    });

    map.addSource('BART_System', {
        'type': 'vector',
        'url': 'mapbox://leahchen.5fqg6p4f'
    });

    map.addLayer({
        'id': 'BART_Station',
        'type': 'circle',
        'source': 'BART_Station',
        'source-layer': 'Station-29t2re', 
        'paint': {
            'circle-color': '#41D99A'
        }
    });

    map.addLayer({
        'id': 'BART_System',
        'type': 'line',
        'source': 'BART_System',
        'source-layer': 'Track-asalv9',
        'paint': {
            'line-color': '#41D99A'
        }
    });

    map.addLayer({
        'id': 'Name', 
        'type': 'symbol', 
        'source': 'BART_Station', 
        'source-layer': 'Station-29t2re', 
        'layout': {
            'text-field': ['get', 'Name'], // 从 'Name' 属性中获取文本
            'text-size': 12
        },
        'paint': {
            'text-color': '#41D99A',
            'text-halo-color': '#FFFFFF',
            'text-halo-width': 0.5 
        }
    });

    map.setLayoutProperty('BART_Station', 'visibility', 'none');
    map.setLayoutProperty('BART_System', 'visibility', 'none');
    map.setLayoutProperty('Name', 'visibility', 'none');

    // Monitor scroll events to switch layers
    window.addEventListener('scroll', function () {
        var chapter9 = document.getElementById('BART-line-chapter');

        if (isElementInViewport(chapter9)) {
            // at chapter 2，close Means_Trans and open Means_Trans2
            map.setLayoutProperty('BART_Station', 'visibility', 'visible');
            map.setLayoutProperty('BART_System', 'visibility', 'visible');
            map.setLayoutProperty('Name', 'visibility', 'visible');
        } else {
            // open Means_Trans and close Means_Trans2 when it get back
            map.setLayoutProperty('BART_Station', 'visibility', 'none');
            map.setLayoutProperty('BART_System', 'visibility', 'none');
            map.setLayoutProperty('Name', 'visibility', 'none');
        }
    });
    window.addEventListener('scroll', function () {
        var chapter1 = document.getElementById('first-chapter');
        var chapter2 = document.getElementById('second-chapter');


        if (isElementInViewport(chapter1) || isElementInViewport(chapter2)) {
            map.setLayoutProperty('BART_Station', 'visibility', 'none');
            map.setLayoutProperty('BART_System', 'visibility', 'none');
            map.setLayoutProperty('Name', 'visibility', 'none');
        }
    });


    var chapter3MapCreated = false; // Flag to check if maps for chapter 3 are created
    var chapter4MapCreated = false;

    function onChapterChange(chapterId) {
        if (chapterId === 'third-chapter' && !chapter3MapCreated) {
            createSwipeMapsForChapter3();
            chapter3MapCreated = true; // Set the flag to true after creating maps
        } else if (chapterId === 'fourth-chapter' && !chapter4MapCreated) {
            createSwipeMapsForChapter4();
            chapter4MapCreated = true;
        }
    }

    function createSwipeMapsForChapter3() {
        const chapterConfig = config.chapters.find(chapter => chapter.id === 'third-chapter');
        // create beforeMap and afterMap
        const beforeMap = new mapboxgl.Map({
            container: 'before1',
            style: chapterConfig.beforeMap.style,
            center: chapterConfig.beforeMap.center,
            zoom: chapterConfig.beforeMap.zoom
        });

        const afterMap = new mapboxgl.Map({
            container: 'after1',
            style: chapterConfig.afterMap.style,
            center: chapterConfig.afterMap.center,
            zoom: chapterConfig.afterMap.zoom
        });

        // use mapboxgl.Compare to compare
        const container = '#comparison-container1';
        new mapboxgl.Compare(beforeMap, afterMap, '#comparison-container1', {
            //mousemove: true
        });
    }
    window.addEventListener('scroll', function () {
        var chapter3 = document.getElementById('third-chapter');
        if (isElementInViewport(chapter3)) {
            onChapterChange('third-chapter');
        }
    });

    function createSwipeMapsForChapter4() {
        const chapterConfig = config.chapters.find(chapter => chapter.id === 'fourth-chapter');
        // create beforeMap and afterMap 
        const beforeMap = new mapboxgl.Map({
            container: 'before2',
            style: chapterConfig.beforeMap.style,
            center: chapterConfig.beforeMap.center,
            zoom: chapterConfig.beforeMap.zoom
        });

        const afterMap = new mapboxgl.Map({
            container: 'after2',
            style: chapterConfig.afterMap.style,
            center: chapterConfig.afterMap.center,
            zoom: chapterConfig.afterMap.zoom
        });

        // use mapboxgl.Compare to compare
        const container = '#comparison-container2';
        new mapboxgl.Compare(beforeMap, afterMap, '#comparison-container2', {
            //mousemove: true
        });
    }
    window.addEventListener('scroll', function () {
        var chapter4 = document.getElementById('fourth-chapter');
        if (isElementInViewport(chapter4)) {
            onChapterChange('fourth-chapter');
        }
    });

    map.addLayer({
        'id': 'S_Change',
        'type': 'circle',
        'source': 'Senior_Change_per',
        'source-layer': 'Senior_Change_per_1921-7fn6fb',
        'paint': {
            'circle-color': '#22B8C4',
            'circle-radius': [
                'interpolate', ['linear'], ['get', 'F_Snr_1921'],
                0.612399, 3,
                0.660715, 8,
                0.72169, 13,
                0.744076, 18,
                0.858128, 23
            ],
            'circle-opacity': [
                'interpolate', ['linear'], ['get', 'F_Snr_1921'],
                0.612399, 0.2,
                0.660715, 0.4,
                0.72169, 0.6,
                0.744076, 0.8,
                0.858128, 1
            ]
        }
    });

    map.addLayer({
        'id': 'S_Change2',
        'type': 'circle',
        'source': 'Senior_Change_per',
        'source-layer': 'Senior_Change_per_1921-7fn6fb',
        'paint': {
            'circle-color': '#B92D7A',
            'circle-radius': [
                'interpolate', ['linear'], ['get', 'F_Snr_2122'],
                0.432655, 3,
                0.494568, 8,
                0.553241, 13,
                0.666473, 18,
                0.839289, 23
            ],
            'circle-opacity': [
                'interpolate', ['linear'], ['get', 'F_Snr_2122'],
                0.432655, 0.2,
                0.494568, 0.4,
                0.553241, 0.6,
                0.666473, 0.8,
                0.839289, 1
            ]
        }
    });

    map.setLayoutProperty('S_Change', 'visibility', 'visible');
    // Monitor scroll to switch layers
    window.addEventListener('scroll', function () {
        var chapter5 = document.getElementById('fifth-chapter');
        var chapter6 = document.getElementById('sixth-chapter');


        if (isElementInViewport(chapter6) && !isElementInViewport(chapter5)) {
            // At chapter6，close S_Change and open S_Change2
            map.setLayoutProperty('S_Change', 'visibility', 'none');
            map.setLayoutProperty('S_Change2', 'visibility', 'visible');
        } else {
            // open S_Change and S_Change2 when it get back
            map.setLayoutProperty('S_Change', 'visibility', 'visible');
            map.setLayoutProperty('S_Change2', 'visibility', 'none');
        }
    });

    window.addEventListener('scroll', function () {
        var chapter1 = document.getElementById('first-chapter');
        var chapter2 = document.getElementById('second-chapter');
        var chapterinter = document.getElementById('interlude');
        var chapterinter2 = document.getElementById('interlude2');
        var chapter3 = document.getElementById('third-chapter');
        var chapter4 = document.getElementById('fourth-chapter');
        var chapter5 = document.getElementById('fifth-chapter');
        var chapter6 = document.getElementById('sixth-chapter');
        var chapterinter3 = document.getElementById('interlude3');
        var chapterinter4 = document.getElementById('interlude4');
        var chapterinter5 = document.getElementById('interlude5');
        var chapterinter6 = document.getElementById('interlude6');
        var chapterinter7 = document.getElementById('interlude7');
        var chapterinter8 = document.getElementById('interlude8');
        var chapterinter9 = document.getElementById('interlude9');

        if (isElementInViewport(chapter1) || isElementInViewport(chapter2) || isElementInViewport(chapterinter) || isElementInViewport(chapterinter2) || isElementInViewport(chapter4) || isElementInViewport(chapter6) || isElementInViewport(chapterinter3) || isElementInViewport(chapterinter4) || isElementInViewport(chapterinter5) || isElementInViewport(chapterinter6) || isElementInViewport(chapterinter7) || isElementInViewport(chapterinter8) || isElementInViewport(chapterinter9)) {
            map.setLayoutProperty('S_Change', 'visibility', 'none');
        }

        // As the map moves, grab and update bounds in inset map.
        if (config.inset) {
            map.on('move', getInsetBounds);
        }
        // setup the instance, pass callback functions
        scroller
            .setup({
                step: '.step',
                offset: 0.5,
                progress: true
            })
            .onStepEnter(async response => {
                var chapter = config.chapters.find(chap => chap.id === response.element.id);
                response.element.classList.add('active');
                map[chapter.mapAnimation || 'flyTo'](chapter.location);
                // Incase you do not want to have a dynamic inset map,
                // rather want to keep it a static view but still change the
                // bbox as main map move: comment out the below if section.
                if (config.inset) {
                    if (chapter.location.zoom < 5) {
                        insetMap.flyTo({ center: chapter.location.center, zoom: 0 });
                    }
                    else {
                        insetMap.flyTo({ center: chapter.location.center, zoom: 3 });
                    }
                }
                if (config.showMarkers) {
                    marker.setLngLat(chapter.location.center);
                }
                if (chapter.onChapterEnter.length > 0) {
                    chapter.onChapterEnter.forEach(setLayerOpacity);
                }
                if (chapter.callback) {
                    window[chapter.callback]();
                }
                if (chapter.rotateAnimation) {
                    map.once('moveend', () => {
                        const rotateNumber = map.getBearing();
                        map.rotateTo(rotateNumber + 180, {
                            duration: 30000, easing: function (t) {
                                return t;
                            }
                        });
                    });
                }
            })
            .onStepExit(response => {
                var chapter = config.chapters.find(chap => chap.id === response.element.id);
                response.element.classList.remove('active');
                if (chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(setLayerOpacity);
                }
            });
    });
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
}

//Helper functions for insetmap
function getInsetBounds() {
    let bounds = map.getBounds();

    let boundsJson = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            bounds._sw.lng,
                            bounds._sw.lat
                        ],
                        [
                            bounds._ne.lng,
                            bounds._sw.lat
                        ],
                        [
                            bounds._ne.lng,
                            bounds._ne.lat
                        ],
                        [
                            bounds._sw.lng,
                            bounds._ne.lat
                        ],
                        [
                            bounds._sw.lng,
                            bounds._sw.lat
                        ]
                    ]
                ]
            }
        }]
    }

    if (initLoad) {
        addInsetLayer(boundsJson);
        initLoad = false;
    } else {
        updateInsetLayer(boundsJson);
    }

}

function addInsetLayer(bounds) {
    insetMap.addSource('boundsSource', {
        'type': 'geojson',
        'data': bounds
    });

    insetMap.addLayer({
        'id': 'boundsLayer',
        'type': 'fill',
        'source': 'boundsSource', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#fff', // blue color fill
            'fill-opacity': 0.2
        }
    });
    // // Add a black outline around the polygon.
    insetMap.addLayer({
        'id': 'outlineLayer',
        'type': 'line',
        'source': 'boundsSource',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 1
        }
    });
}

function updateInsetLayer(bounds) {
    insetMap.getSource('boundsSource').setData(bounds);
}

// setup resize event
window.addEventListener('resize', scroller.resize);