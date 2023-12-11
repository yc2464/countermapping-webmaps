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
    byline: 'By Leah Chen',
    //image: 'images/The Change of Age Distribution from 2018-2022.jpg',
    para1: 'This study will focus on the Bay Area Rapid Transit (BART) as its primary research subject. Serving as a crucial regional public transportation system in the Bay Area, BART connects five counties. However, due to Covid-19, ridership dramatically decreased and has not yet been able to recover to its pre-pandemic levels. This decline may be partially attributed to tech workers in the Bay Area continuing to work from home, resulting in an increased proportion of senior adults in all revenue ticket sales. Furthermore, from 2020 to 2022, the ridership for senior adults was 32.42%, 30.71%, and 47.46% respectively of the 2019 figures. In comparison, the numbers for all revenue trips were 27.42%, 20.93%, and 35.01% respectively, indicating that the elderly rely more heavily on BART and returned to using it sooner than the general population.',
    para2: 'As the elderly age, they experience functional limitations, manifesting as vision declines, diminished physical fitness and flexibility, decreased ability to focus attention, and an increase in reaction time (Lynott et al., 2009). This is a very serious question, because a decrease in mobility further disconnects them from society, leading to personal identity issues, increased social isolation, depression, and reduced physical and emotional health (Burkhardt, 2006). Thus, this research aims to delve into the root causes of this phenomenon, understanding the travel pattern differences for senior citizens during and after the pandemic. I aim to find out what demographic and socioeconomic characteristics of older adults who were still using BART to get around during the pendemic. By doing so, we seek to understand how we can ensure mobility for senior citizens, allowing them to travel freely and enjoy life.',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Means Of Transportation To Work - Car',
            image: 'images/Legend Car.png',
            dataColumn: 'Car_per',
            description: 'This map shows the percentage of people who drive to work in each Census Block Group, with darker colors meaning that people who live here are more likely to drive to work. It can be noticed that only people in the city center and along the main roads are less likely to use private cars.',
            location: {
                center: [-122.44985343288347, 37.70282671304935],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                //     layer: 'layer-name',
                //     opacity: 1,
                     duration: 8000
                }
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
            title: 'Means Of Transportation To Work – Public Transportation',
            image: 'images/Legend Public Trans.png',
            dataColumn: 'Public_per',
            description: 'Similarly, this graph shows the percentage of people who take public transit to work in each Census Block Group. In summary, Residents of the Bay Area rely heavily on driving to get around, with public transit only available near major roadways.',
            location: {
                center: [-122.44985343288347, 37.70282671304935],
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
            onChapterEnter: [
                {
                //     layer: 'layer-name',
                //     opacity: 1,
                     duration: 8000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'BART-line-chapter',
            alignment: 'left',
            hidden: false,
            title: 'BART System Map',
            //image: 'images/sandy3.jpg',
            //dataColumn: 'Name',
            description: 'Serving as a crucial regional public transportation system in the Bay Area, BART connects five counties: San Francisco, Alameda, Contra Costa, San Mateo, and Santa Clara, acting as an essential commuting tool for Bay Area residents.',
            location: {
                center: [-122.44985343288347, 37.70282671304935],
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
            onChapterEnter: [
                {
                     layer: 'layer-name',
                     opacity: 1,
                     duration: 8000
                }
            ],
        },
        {
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            title: 'Historical Trend For Daily Transit Ridership by Operator',
            description: "Focusing on public transportation in the Bay Area, this Historical Trend For Daily Transit Ridership by Operator shows the impact of the pandemic on public transportation is significant, with BART and MUNI receiving the most severe impacts (BART in dark red). And as you can see, BART's ridership recovery is still less than 30% through the latest year, 2022.",
            image: 'images/Transit Ridership - Historical Trend For Daily Transit Ridership by Operator.png', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
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
            description: 'When further focusing on seniors who ride BART, the graph shows that the percentage of trips taken by the elderly rose from 5.23% to 7.93% in the aftermath of the pandemic, which suggests that seniors are relatively more reliant on BART travel.This is most likely due to the physical limitations of the elderly. However, poor air movement and high population density on public transportation make the likelihood of contracting covid-19 on public transportation higher. In this case, how will older adults choose?',
            image: 'images/The Change of Age Distribution from 2018-2022.png', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
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
            description: "This is BART's Senior Adult OD Metrics from 2019 to 2021. 2019 on the left and 2021 on the right. We can clearly see a significant reduction in the percentage of long distance trips. bart is no longer an important mode of travel for their long distance trips.", 
            beforeMap: {
                style: 'mapbox://styles/leahchen/clpeskda8007g01qmf5zh92aj',
                center: [-122.2, 37.7],
                zoom: 8.3
            },
            afterMap: {
                style: 'mapbox://styles/leahchen/clpeuqow5006r01p41uqu8ayz',
                center: [-122.2, 37.7],
                zoom: 8.3
            },
        }, 
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Senior Adult OD Metrics 2021-2022',
            description:"In BART's Senior Adult OD Metrics from 2021 to 2022, the left side is for 2019 and the right side is for 2021. There is no significant change in the percentage of trips for the different distances in them. A closer look reveals that some of the shorter distance trips are prioritized for recovery.", 
            beforeMap: {
                style: 'mapbox://styles/leahchen/clpeuqow5006r01p41uqu8ayz',
                center: [-122.2, 37.7],
                zoom: 8.3
            },
            afterMap: {
                style: 'mapbox://styles/leahchen/clpf3nkxl007l01qmcjq73l4d',
                center: [-122.2, 37.7],
                zoom: 8.3
            },
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Percentage Change in the Number of Senior at Each Station from 2019 to 2021',
            dataColumn: 'F_Snr_1921',
            description: 'Focusing deeper on each station, we can see that Fremont, San Mateo, and Concord which are close to the BART final stops, have seen sharp declines in ridership and a huge amount of change from 2019 to 2021. Then there are city centers, like San Fransico and Oakland, where ridership plummets.',
            image: 'images/Legend Senior 1921.png', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            },
            onChapterEnter:[],
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Percentage Change in the Number of Senior at Each Station from 2021 to 2022',
            dataColumn: 'F_Snr_2122',
            description: 'And when we look at ridership recovery after pandemic, we can clearly see that the sites prioritized for recovery are closer to areas with urban centers, such as Lefaytte, Hayward, and Berkeley, as well as a rapid rebound in airport site ridership induced by the resumption of airport routes.',
            image: 'images/Legend Senior 2122.png', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
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
            description: 'Digging deeper into the demographic characteristics of older adults using BART before and after the epidemic, we find an increase in the percentage of older adults without car/motorcycle ownership. This scenario suggests that the outbreak exacerbates the fact that senior adults with physical functional limitations are more likely to be exposed to virus infections because their physical condition forces them to use public transit only.',
            image: 'images/ridership by car ownership.jpg', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
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
            description: 'Similarly, the percentage of Low income Senior adults riding BART increased after the pandemic, from 18% to 25%.',
            image: 'images/ridership by income.jpg', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
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
            description: 'Interestingly, after pandemic, the percentage of women among seniors who ride BART increased dramatically, from 41% to 55%. Suggesting that female seniors have less access to alternative modes of travel, we should give them more attention.',
            image: 'images/ridership by gender.jpg', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            }, 
        }, 
            {
            id: 'interlude6',
            alignment: 'center',
            hidden: false,
            title: 'Travel Purpose',
            description: 'In terms of trip purpose, seniors who ride BART mainly because Commute, Visit friends / family, Theater or concert, Shopping and Airplane trip.',
            image: 'images/Travel Purpose.jpg', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            }, 
        }, 
        {
            id: 'interlude7',
            alignment: 'center',
            hidden: false,
            title: 'The Change of Travel Purpose - Decrease',
            description: 'After the pandemic, there was a decrease in the number of seniors traveling on BART for commute, theater or concert, and sport event. This suggests that the cancellation of large events or the decrease in participation by seniors in large events after the outbreak led to a decrease in BART usage.',
            image: 'images/The Change of Travel Purpose - Decrease.jpg',  
            location: {
              center: [-122.44985343288347, 37.70282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            }, 
        }, 
        {
            id: 'interlude8',
            alignment: 'center',
            hidden: false,
            title: 'The Change of Travel Purpose - Increase',
            description: 'In contrast, Visit friends / family and Fitness / recreation, which are private, outdoor activities, increased.',
            image: 'images/The Change of Travel Purpose - Increase.jpg', 
            location: {
              center: [-122.44985343288347, 37.70282671304935],
              zoom: 9,
              pitch: 0,
              bearing: 0,
            }
        }
    ]
};
