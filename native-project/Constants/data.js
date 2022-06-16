const shuffleArray = array =>
  array
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)



export const HomeScreenPics = shuffleArray([
    {
      id: "1",
      pic: require('../assets/boy1.jpg'),
      title: 'Rohan, 27',
      caption: '16 miles away',
    },
    {
      id: "2",
      pic: require('../assets/boy2.jpg'),
      title: 'Sourav, 23',
      caption: '2 miles away',
    },
    {
      id: "3",
      pic: require('../assets/boy3.jpg'),
      title: 'Rohit, 22',
      caption: '24 miles away',
    },
    {
      id: "4",
      pic: require('../assets/boy4.jpg'),
      title: 'Sarang, 23',
      caption: '45 miles away',
    },
    {
      id: "5",
      pic: require('../assets/Boy5.jpg'),
      title: 'Amit, 27',
      caption: '32 miles away',
    },
    {
      id:"6",
      pic: require('../assets/shivam.jpg'),
      title: 'Shivam, 24',
      caption: '30 miles away',
    },
    {
      id:"7",
      pic: require('../assets/harshit.jpg'),
      title: 'Harshit, 18',
      caption: '14 miles away',
    },
    // {
    //   pic: require('../assets/images/women/women8.jpg'),
    //   title: 'Monica, 35',
    //   caption: '19 miles away',
    // },
    // {
    //   pic: require('../assets/images/women/women9.jpg'),
    //   title: 'Lisa, 25',
    //   caption: '7 miles away',
    // },
    // {
    //   pic: require('../assets/images/women/women10.jpg'),
    //   title: 'Julia, 22',
    //   caption: '9 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men1.jpg'),
    //   title: 'Aaron, 24',
    //   caption: '3 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men2.jpg'),
    //   title: 'Novak, 27',
    //   caption: '12 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men3.jpg'),
    //   title: 'Justin, 32',
    //   caption: '20 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men4.jpg'),
    //   title: 'Tony, 21',
    //   caption: '4 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men5.jpg'),
    //   title: 'Leo, 30',
    //   caption: '22 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men6.jpg'),
    //   title: 'Ronald, 39',
    //   caption: '35 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men7.jpg'),
    //   title: 'Johnny, 41',
    //   caption: '44 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men8.jpg'),
    //   title: 'Chandler, 35',
    //   caption: '29 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men9.jpg'),
    //   title: 'Joey, 29',
    //   caption: '17 miles away',
    // },
    // {
    //   pic: require('../assets/images/men/men10.jpg'),
    //   title: 'Alfie, 37',
    //   caption: '27 miles away',
    // },
  ])
  
//   export const TopPicksScreenPics = shuffleArray([
//     {
//       pic: require('../assets/images/women/women11.jpg'),
//       title: 'Annie, 40',
//       caption: '26h left',
//     },
//     {
//       pic: require('../assets/images/women/women12.jpg'),
//       title: 'Lena, 31',
//       caption: '20h left',
//     },
//     {
//       pic: require('../assets/images/women/women13.jpg'),
//       title: 'Kendra, 19',
//       caption: '15h left',
//     },
//     {
//       pic: require('../assets/images/women/women14.jpg'),
//       title: 'Mia, 23',
//       caption: '45h left',
//     },
//     {
//       pic: require('../assets/images/women/women15.jpg'),
//       title: 'Jenny, 27',
//       caption: '12h left',
//     },
//     {
//       pic: require('../assets/images/men/men11.jpg'),
//       title: 'Dwayne, 34',
//       caption: '13h left',
//     },
//     {
//       pic: require('../assets/images/men/men12.jpg'),
//       title: 'Novak, 27',
//       caption: '22h left',
//     },
//     {
//       pic: require('../assets/images/men/men13.jpg'),
//       title: 'Zikomo, 32',
//       caption: '20h left',
//     },
//     {
//       pic: require('../assets/images/men/men14.jpg'),
//       title: 'Sam, 19',
//       caption: '42h left',
//     },
//     {
//       pic: require('../assets/images/men/men15.jpg'),
//       title: 'Richard, 31',
//       caption: '21h left',
//     },
//   ])