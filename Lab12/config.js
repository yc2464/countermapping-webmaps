var config = {
    style:  'mapbox://styles/iamwfx/cjjx6bl926vgt2ss0l9dbpmxz',
    accessToken: 'pk.eyJ1IjoibGVhaGNoZW4iLCJhIjoiY2xuMXhxbDd5MDJoMjJqbmIyZ3BvaGdhdyJ9.caJH4T_iZebNdFvlAYkAOw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By a Digital Storyteller',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, diam et hendrerit tincidunt, ligula lacus lobortis urna, id convallis velit ex vitae nulla. Aliquam sollicitudin nunc a semper tristique. Aenean sodales nec ante vel suscipit. Vivamus condimentum posuere lacus. Maecenas vehicula non ex a fermentum. Aenean ac leo ut turpis efficitur consectetur sed a tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lobortis feugiat erat, in sagittis nulla facilisis quis. Vestibulum vehicula in arcu et ullamcorper. Pellentesque vehicula sed tellus quis lacinia. Etiam molestie, dolor eget dictum dictum, metus felis interdum magna, id semper nulla erat eget ligula. Vivamus et erat magna. Fusce et malesuada nisi. Sed efficitur enim et pharetra venenatis. Mauris sed est eget sapien viverra pretium.',
    para2: 'Curabitur sagittis ultrices sem vel imperdiet. Mauris luctus lobortis rhoncus. In accumsan urna a leo vulputate, et scelerisque velit mollis. Vestibulum hendrerit egestas tincidunt. Nullam luctus laoreet feugiat. Sed tortor nulla, pretium quis aliquam a, ultricies a turpis. Vestibulum faucibus, mauris dapibus hendrerit aliquet, metus lorem imperdiet felis, eu porta dui velit id leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras dapibus elementum felis ac accumsan. Duis nisl mi, volutpat et est et, suscipit porta ipsum. Ut sed diam eleifend, vehicula urna vel, euismod tortor. Quisque vulputate enim sit amet libero egestas, ac pulvinar nibh laoreet. Integer porta, libero non condimentum ullamcorper, lacus eros scelerisque est, id suscipit velit ligula eget nulla. Praesent eu placerat erat. Vivamus hendrerit dolor turpis, at aliquet ex commodo vitae.',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Manhattan',
            image: 'images/sandy2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.98899, 40.73553],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
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
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Washington',
            image: 'images/sandy3.jpg',
            description: 'Mauris luctus lobortis rhoncus. In accumsan urna a leo vulputate, et scelerisque velit mollis. Vestibulum hendrerit egestas tincidunt. Nullam luctus laoreet feugiat. Sed tortor nulla, pretium quis aliquam a, ultricies a turpis. Vestibulum faucibus, mauris dapibus hendrerit aliquet, metus lorem imperdiet felis, eu porta dui velit id leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
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
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4', 
            location: {
              center: [-73.97615, 40.71901],
              zoom: 14.84,
              pitch: 48,
              bearing: 142.44,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Lillian Wald - Public Housing',
            image: 'images/sandy4.jpg',
            description: 'Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum.',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};
