var config = {
    style:  'mapbox://styles/leahchen/cloz7vs0w00my01qdglkqg2oo',
    accessToken: 'pk.eyJ1IjoibGVhaGNoZW4iLCJhIjoiY2xuMXhxbDd5MDJoMjJqbmIyZ3BvaGdhdyJ9.caJH4T_iZebNdFvlAYkAOw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: "The Impact of Covid-19 on Senior Adults' Public Transportation Utilization and Travel Patterns",
    subtitle: 'A Case Study of Bay Area Rapid Transit (BART)',
    byline: 'By a Digital Storyteller',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur, diam et hendrerit tincidunt, ligula lacus lobortis urna, id convallis velit ex vitae nulla. Aliquam sollicitudin nunc a semper tristique. Aenean sodales nec ante vel suscipit. Vivamus condimentum posuere lacus. Maecenas vehicula non ex a fermentum. Aenean ac leo ut turpis efficitur consectetur sed a tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lobortis feugiat erat, in sagittis nulla facilisis quis. Vestibulum vehicula in arcu et ullamcorper. Pellentesque vehicula sed tellus quis lacinia. Etiam molestie, dolor eget dictum dictum, metus felis interdum magna, id semper nulla erat eget ligula. Vivamus et erat magna. Fusce et malesuada nisi. Sed efficitur enim et pharetra venenatis. Mauris sed est eget sapien viverra pretium.',
    para2: 'Curabitur sagittis ultrices sem vel imperdiet. Mauris luctus lobortis rhoncus. In accumsan urna a leo vulputate, et scelerisque velit mollis. Vestibulum hendrerit egestas tincidunt. Nullam luctus laoreet feugiat. Sed tortor nulla, pretium quis aliquam a, ultricies a turpis. Vestibulum faucibus, mauris dapibus hendrerit aliquet, metus lorem imperdiet felis, eu porta dui velit id leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras dapibus elementum felis ac accumsan. Duis nisl mi, volutpat et est et, suscipit porta ipsum. Ut sed diam eleifend, vehicula urna vel, euismod tortor. Quisque vulputate enim sit amet libero egestas, ac pulvinar nibh laoreet. Integer porta, libero non condimentum ullamcorper, lacus eros scelerisque est, id suscipit velit ligula eget nulla. Praesent eu placerat erat. Vivamus hendrerit dolor turpis, at aliquet ex commodo vitae.',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Manhattan',
            image: 'images/sandy2.jpg',
            dataColumn: 'Car_per',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.44985343288347, 37.77282671304935],
                zoom: 9,
                pitch: 0,
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
            alignment: 'left',
            hidden: false,
            title: 'Washington',
            image: 'images/sandy3.jpg',
            dataColumn: 'Public_per',
            description: 'Mauris luctus lobortis rhoncus. In accumsan urna a leo vulputate, et scelerisque velit mollis. Vestibulum hendrerit egestas tincidunt. Nullam luctus laoreet feugiat. Sed tortor nulla, pretium quis aliquam a, ultricies a turpis. Vestibulum faucibus, mauris dapibus hendrerit aliquet, metus lorem imperdiet felis, eu porta dui velit id leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            location: {
                center: [-122.44985343288347, 37.77282671304935],
                zoom: 9,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            title: 'Historical Trend For Daily Transit Ridership by Operator',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            image: 'images/Transit Ridership - Historical Trend For Daily Transit Ridership by Operator.png', 
            location: {
              center: [-122.44985343288347, 37.77282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            },
        },
        {
            id: 'interlude2',
            alignment: 'center',
            hidden: false,
            title: 'The Change of Age Distribution - 2018 and 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            image: 'images/The Change of Age Distribution from 2018-2022.png', 
            location: {
              center: [-122.44985343288347, 37.77282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Senior Adult OD Metrics 2019-2021',
            //description: '<div id="comparison-container1">Some content for container 1</div>', 
            beforeMap: {
                style: 'mapbox://styles/leahchen/clpeskda8007g01qmf5zh92aj',
                center: [-122.44985343288347, 37.77282671304935],
                zoom: 9
            },
            afterMap: {
                style: 'mapbox://styles/leahchen/clpeuqow5006r01p41uqu8ayz',
                center: [-122.44985343288347, 37.77282671304935],
                zoom: 9
            },
        }, 
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Senior Adult OD Metrics 2021-2022',
            beforeMap: {
                style: 'mapbox://styles/leahchen/clpeuqow5006r01p41uqu8ayz',
                center: [-122.44985343288347, 37.77282671304935],
                zoom: 9
            },
            afterMap: {
                style: 'mapbox://styles/leahchen/clpf3nkxl007l01qmcjq73l4d',
                center: [-122.44985343288347, 37.77282671304935],
                zoom: 9
            },
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Percentage Change in the Number of Senior at Each Station from 2019 to 2021',
            dataColumn: 'F_Snr_1921',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            //image: 'images/The Change of Age Distribution from 2018-2022.png', 
            location: {
              center: [-122.44985343288347, 37.77282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            },
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Percentage Change in the Number of Senior at Each Station from 2021 to 2022',
            dataColumn: 'F_Snr_2122',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            image: 'images/The Change of Age Distribution from 2018-2022.png', 
            location: {
              center: [-122.44985343288347, 37.77282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            },
        },
        {
            id: 'interlude3',
            alignment: 'center',
            hidden: false,
            title: 'Ridership by Car Ownership',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            image: 'images/ridership by car ownership.jpg', 
            location: {
              center: [-122.44985343288347, 37.77282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            },
        },
        {
            id: 'interlude4',
            alignment: 'center',
            hidden: false,
            title: 'Ridership by Income',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            image: 'images/ridership by income.jpg', 
            location: {
              center: [-122.44985343288347, 37.77282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            },
        },
        {
            id: 'interlude5',
            alignment: 'center',
            hidden: false,
            title: 'Ridership by Gender',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            image: 'images/ridership by gender.jpg', 
            location: {
              center: [-122.44985343288347, 37.77282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            }
        }
    ]
};
