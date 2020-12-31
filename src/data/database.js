//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// DATA FOR THE HOME PAGE
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

const logos = {
  logo: require('../images/logos/xona-logo.png'), // The full logo with the whole name and subtitle
  icon: require('../images/logos/xona-icon.png'), // Just the compass icon
  iconWhite: require('../images/logos/xona-icon-white.png'), // All-white compass icon
};

const socials = [
  {
    name: 'LinkedIn',
    icon: require('../images/icons/linkedin.svg'),
    link: 'https://www.linkedin.com/company/xona-space-systems',
  },
  {
    name: 'Twitter',
    icon: require('../images/icons/twitter.svg'),
    link: 'https://twitter.com/XonaSpace',
  },
  {
    name: 'Instagram',
    icon: require('../images/icons/instagram.svg'),
    link: 'https://www.instagram.com/XonaSpace/',
  },
];
const home = {
  // SECTION ONE (The main hero of the home page)
  hero: {
    // If emphasizedWord value is present, it will appear first in the title and be blue
    // If you do not want it simply leave an empty string there (Ex: '')
    emphazisedWord: 'Navigation',
    // The rest of the title, or the whole title in white if theres no emphasizedWord
    header: `for the age of autonomy`,
    // So together the emphasized word and header will come out as "Navigation for the age of autonomy"
    background: require('../images/backgroundImages/earth.jpg'),
  },

  // SECTION TWO
  // The secondary header/link to the GPS Final Report document
  link: {
    // The actual text for the link
    text: 'Over $300 billion per year relies on an unprotected navigation net',
    // The url that the link should route to
    url: 'https://www.rti.org/sites/default/files/gps_finalreport.pdf',
    // The under the document link that explains WHY this navigation solution is necessary
    explanation:
      'Intelligent systems require a navigation solution that supports safety-critical operation, centimeter positioning, and cybersecurity for millions of users',
  },
  // SECTION THREE (Xona Pulsar showcase)
  pulsar: {
    // The name of the product
    name: 'Xona Pulsar',
    // Short description of the product
    description:
      "With satellites in low Earth orbit, Xona's Pulsar™ Position, Navigation and Timing (PNT) service will provide the security, availability and accuracy needed to support the age of autonomy.",
    // The three main benefits of the product
    abilities: [
      [
        'Encryption & Precision Corrections',
        require('../images/encryption.jpg'),
      ],
      ['Stronger Signals', require('../images/strength.jpg')],
      ['Faster Convergence', require('../images/convergence.jpg')],
    ],
    background: require('../images/backgroundImages/sky-large.jpg'),
  },
  // SECTION FOUR (Applications for Xona Pulsar)
  applications: {
    // The main heading of the section
    heading: 'Applications',
    items: [
      // Each item in this array is one application, you can just remove or add another object {text: '', image: ''} and it will be added to the list
      {
        text: 'All Weather Economy',
        // To change the image just change the name after the last / to match the name of the new image
        // Make sure you've added the new image to the backgroundImages folder in the images folder
        // Ex: '../../images/backgroundImages/<NEW-IMAGE-HERE>.jpg'
        image: require('../images/backgroundImages/all-weather-autonomy.jpg'),
      },
      {
        text: 'Weather Data',
        image: require('../images/backgroundImages/weather-data.jpg'),
      },
      {
        text: 'Critical Infrastructure',
        image: require('../images/backgroundImages/critical-infrastructure.jpg'),
      },
      {
        text: 'Aerial Mobility',
        image: require('../images/backgroundImages/aerial-mobility.jpg'),
      },
      {
        text: 'Smart Agriculture',
        image: require('../images/backgroundImages/smart-agriculture.jpg'),
      },
      {
        text: 'Maritime',
        image: require('../images/backgroundImages/maritime.jpg'),
      },
    ],
  },
  // SECTION FIVE (News section)
  news: {
    heading: 'News',
    newsArchiveHeading: 'News Archive',
    // This is the amount of news articles shown on the home page, all will be shown on the news archive page
    amountShown: 4,
    // Each item in this array is 1 news article component
    articles: [
      {
        date: 'December 18, 2020',
        // You can put a url link to an image or the relative path from this file
        // So add it to the newsImages folder and change the path below after newImages/ to the name and extension (probably .jpg) of the new image
        // Ex: '../images/newsImages/<IMAGE-NAME-HERE>.jpg'
        image: require('../images/newsImages/winner-pitch-to-the-moon.jpg'),
        title: 'Winner of the Pitch to the Moon Competition',
        description:
          'Xona is selected as the winner of the Pitch to the Moon competition at TC Sessions: Space 2020',
        url: '#',
      },
      {
        date: 'November 19, 2020',
        image: require('../images/newsImages/bluetech-week-surface-navigation.jpg'),
        title: 'Blue Tech Week 2020',
        description:
          "Xona's CTO Tyler Reid on the Future of Surface Navigation at TMA Blue Tech's Blue Tech Week",
        url: 'https://www.tmabluetech.org/bluetech-week/agenda',
      },
      {
        date: 'September 1, 2020',
        image: require('../images/newsImages/gnss-interview-pt1.jpg'),
        title: "Part 1 of Only GNSS' interview with Xona's CTO Dr. Tyler Reid",
        description: "The story behind the first spec's for autonomous cars",
        url: 'https://youtu.be/RTcOz7yTKtQ',
      },
      {
        date: 'July 10, 2020',
        image: require('../images/newsImages/bbc-news-pnt-from-leo.jpg'),
        title: 'Xona Space in BBC News',
        description:
          'Xona weighs in on the benefits of PNT from LEO with BBC News',
        url: 'https://www.bbc.com/news/science-environment-53370930',
      },
      {
        date: 'July 9, 2020',
        image: require('../images/newsImages/sat-magazine.jpg'),
        title: 'Xona Featured Article in SatMagazine July 2020',
        description:
          "Xona's CTO Dr. Tyler Reid writes a SatMagazine featured article on the Road to Robust Navigation",
        url: 'http://www.satmagazine.com/story.php?number=458493854',
      },
      {
        date: 'July 6, 2020',
        image: require('../images/newsImages/rtca-award.jpg'),
        title: "Xona's CTO Awarded RTCA's William E. Jackson Award for 2020",
        description:
          'Check out the RTCA Aviation Technology Connect Webinar! Xona’s CTO Dr. Tyler Reid was presented with the 2020 William E. Jackson Award for outstanding graduate student in the field of aviation electronics and telecommunications.',
        url:
          'https://www.bigmarker.com/rtca-inc/RTCA-Aviation-Technology-Connect-Webinar?bmid=19f4c287a953',
      },
      {
        date: 'July 1, 2020',
        image: require('../images/newsImages/sat-nav-leo.jpg'),
        title: 'Curious About Sat-Nav from LEO?',
        description:
          'Check out this 2016 study by our co-founders investigating LEO mega-constellations for GPS-level navigation',
        url:
          'https://www.researchgate.net/publication/308795972_Leveraging_Commercial_Broadband_LEO_Constellations_for_Navigation',
      },
      {
        date: 'June 23, 2020',
        image: require('../images/newsImages/virtus-best-westcoast-startup.jpg'),
        title: "Virtus Groups' West Coast's Finest Newsletter",
        description:
          "Xona makes Virtus Groups' list of best West Coast emerging startups",
        url: 'https://virtusgroups.com/newsletters/xona-space-systems-23-june/',
      },
      {
        date: 'June 7, 2020',
        image: require('../images/newsImages/inside-gnss-leo-successor.jpg'),
        title: 'LEO Successor to GNSS Comes Knocking',
        description:
          'Xona Space Systems is featured in this InsideGNSS article',
        url: 'https://insidegnss.com/leo-successor-to-gnss-comes-knocking/',
      },
      {
        date: 'May 26, 2020',
        image: require('../images/newsImages/the-telegraph-uk-presence.jpg'),
        title: 'Xona Space in The Telegraph',
        description:
          "Xona's Brian Manning and Miguel Seun Cardoso discuss Xona's goals and UK presence with the Telegraph",
        url:
          'https://www.telegraph.co.uk/technology/2020/05/26/american-satellite-start-up-founded-spacex-veteran-expands-uk/',
      },
      {
        date: 'May, 20, 2020',
        image: require('../images/newsImages/sat-nav-for-age-of-autonomy.jpg'),
        title: 'Satellite Navigation for the Age of Autonomy',
        description:
          'Xona Space Systems publishes invited paper at ION/IEEE PLANS conference on Satellite Navigation for the Age of Autonomy',
        url:
          'https://47aedb56-b7fb-4217-8689-071c1c74189a.usrfiles.com/ugd/47aedb_93a208ee2b5f421ea4be80a7c3d9bea4.pdf',
      },
      {
        date: 'May 14, 2020',
        image: require('../images/newsImages/tech-crunch-1m-for-satnav.jpg'),
        title: 'Xona Space in TechCrunch',
        description:
          'Xona Space Systems raises $1 million to improve satellite based navigation services',
        url:
          'https://techcrunch.com/2020/05/14/xona-space-systems-raises-1-million-to-improve-satellite-based-navigation-services/',
      },
      {
        date: 'May 14, 2020',
        image: require('../images/newsImages/xona-space-raises-1m.jpg'),
        title: 'Xona Space Systems raises $1M',
        description:
          'Xona Space Systems raises $1M pre-seed round from 1517, Seraphim Capital, Trucks Venture Capital and Stellar Solutions',
        url: 'http://www.xonaspace.com/pr20200514',
      },
      {
        date: 'February 28, 2020',
        image: require('../images/newsImages/swift-navigation.jpg'),
        title: 'Xona collaborates with Swift Navigation',
        description:
          'Xona collaborates with Swift Navigation on a white paper that reviews recent developments in modern GNSS and its impact on autonomous driving architectures',
        url:
          'https://www.swiftnav.com/sites/default/files/whitepapers/swift_nav_modern_gnss_autonomous_vehicles.pdf',
      },
      {
        date: 'February 5, 2020',
        image: require('../images/newsImages/winner-smallsat-symposium-competition-2020.jpg'),
        title: 'Winner of the 2020 SmallSat Symposium Start-Up Competition',
        description:
          'Xona Space Systems is the winner of the SmallSat Symposium 2020 Start-Up Competition in Silicon Valley!',
        url: 'https://2020.smallsatshow.com/conference-proceedings/',
      },
      {
        date: 'January 29, 2020',
        image: require('../images/newsImages/participation-smallsat-symposium-competition2020.jpg'),
        title: 'SmallSat Symposium 2020',
        description:
          "Xona's Brian Manning will be taking part in the SmallSat Startup Pitch session at 4:30 on Feb. 5th at the Silicon Valley Computer History Museum.",
        url: 'https://2020.smallsatshow.com/sessions/smallsat-startup-pitch/',
      },
      {
        date: 'January 7, 2020',
        image: require('../images/newsImages/inside-gnss-rtk-north-american-highways.jpg'),
        title: 'Standalone and RTK GNSS on North American Highways',
        description: 'Xona contributes to this Inside GNSS article!',
        url:
          'https://insidegnss.com/standalone-and-rtk-gnss-on-north-american-highways/',
      },
      {
        date: 'November 6, 2019',
        image: require('../images/newsImages/hello-tomorrow-deep-tech-pioneer.jpg'),
        title: 'We’re a Deep Tech Pioneer!',
        description:
          'Xona Space Systems has been named one of Hello Tomorrow’s Deep Tech Pioneers, from over 5,000 applications from 128 countries! Come and meet us at the Hello Tomorrow Global Summit in Paris on 12th-13th March 2020!',
        url: 'https://hello-tomorrow.org/summit/',
      },
      {
        date: 'October 26, 2019',
        image: require('../images/newsImages/catalyst-campus-innovation-days.jpg'),
        title: 'Catalyst Campus Innovation Days Event',
        description:
          'Xona Space Systems stands out at the Catalyst Campus’ Innovation Days event as covered by the Gazette.',
        url:
          'https://gazette.com/business/truck-stops-in-space-among-innovations-that-could-help-drive/article_242e1cda-f751-11e9-ab5d-eb1fafdf931b.html?utm_medium=social&utm_source=twitter&utm_campaign=user-share',
      },
      {
        date: 'May 16, 2019',
        image: require('../images/newsImages/seraphim-spacecamp-mission3.jpg'),
        title: 'Seraphim Spacecamp Launches Mission 3',
        description:
          'Xona Space Systems is announced as one of the 7 participating startups in the Seraphim Space Camp',
        url:
          'https://www.spacecamp.vc/insight/news/seraphim-space-camp-launches-mission-3?utm_content=buffer2c596&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer',
      },
    ],
  },
};

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// DATA FOR THE ABOUT PAGE
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

const about = {
  // SECTION ONE (The banner of the about page, so the left and right images and the text headings within them)
  hero: {
    leftHeading: 'What Drives Us',
    leftImage: require('../images/backgroundImages/team.jpg'),
    rightHeading:
      'Enabling intelligent systems to operate safely in any environment',
    rightImage: require('../images/backgroundImages/city.jpg'),
  },
  // SECTION TWO (The team description right under the banner)
  description: `We are a group of space ninjas, engineers, GPS nerds, motorcycle racers,
  and adventurers. Our experience comes from SpaceX, Blue Origin, Booz
  Allen Hamilton, NASA, Ford Motor Company, and Stanford GPS Lab. We
  helped put over 50 vehicles in space and have published over 50
  scientific papers advancing navigation technology.`,
  // SECTION THREE (The members section, the heading as well as all the member card components)
  teamHeading: 'We are Xona',
  members: [
    {
      name: 'Brian Manning',
      image: require('../images/team/brian-manning.jpg'),
      linkedIn: 'https://www.linkedin.com/in/brian-manning-x/',
      role: 'CEO',
      experience: [
        { title: 'Structures Engineer', location: 'SpaceX' },
        { title: 'MBA', location: 'London Business School' },
        {
          title: 'MS Aeronautics & Astronautics',
          location: 'Stanford University',
        },
      ],
      hobbies: 'Motorcycle Racing, Snowboarding, Crossfit',
    },
    {
      name: 'Tyler Reid',
      image: require('../images/team/tyler-reid.jpg'),
      linkedIn: 'https://www.linkedin.com/in/tyler-reid-06398936/',
      role: 'CTO',
      experience: [
        {
          title: 'Researcher, Autonomous Driving',
          location: 'Ford Motor Company',
        },
        { title: 'Researcher, GPS Lab', location: 'Stanford University' },
        {
          title: 'PhD & MS Aeronautics & Astronautics',
          location: 'Stanford University',
        },
      ],
      hobbies: 'Electric Guitar, Hiking, Exploring',
    },
    {
      name: 'Bryan Chan',
      image: require('../images/team/bryan-chan.jpg'),
      linkedIn: 'https://www.linkedin.com/in/bryancchan/',
      role: 'Business Development Director',
      experience: [
        { title: 'Co-founder', location: 'Night Crew Labs' },
        { title: 'Program Manager', location: 'Space Systems Loral (Maxar)' },
        {
          title: 'MS Aeronautics & Astronautics',
          location: 'Stanford University',
        },
      ],
      hobbies: 'Bicycling, Homebrewing, Photography',
    },
    {
      name: 'Adrien Perkins',
      image: require('../images/team/adrien-perkins.jpg'),
      linkedIn: 'https://www.linkedin.com/in/adrien-perkins/',
      role: 'Director of Navigation Systems',
      experience: [
        { title: 'Lead Software Developer', location: 'Callsnapp' },
        { title: 'Researcher, GPS Lab', location: 'Stanford University' },
        {
          title: 'PhD & MS Aeronautics & Astronautics',
          location: 'Stanford University',
        },
      ],
      hobbies: 'Skiing, Board Games',
    },
    {
      name: 'Andrew Neish',
      image: require('../images/team/andrew-neish.jpg'),
      linkedIn: 'https://www.linkedin.com/in/andrew-neish-32355488/',
      role: 'Navigation Signals & Security Lead',
      experience: [
        {
          title: 'New Shepard and New Glenn Navigation',
          location: 'Blue Origin',
        },
        { title: 'Researcher, GPS Lab', location: 'Stanford University' },
        {
          title: 'PhD & MS Aeronautics & Astronautics',
          location: 'Stanford University',
        },
      ],
      hobbies: 'Backpacking, Trumpet, Photography',
    },
    {
      name: 'Kazuma Gunning',
      image: require('../images/team/kazuma-gunning.jpg'),
      linkedIn: 'https://www.linkedin.com/in/kgunning/',
      role: 'Navigation Algorithms & Architecture Lead',
      experience: [
        {
          title: 'GPS III, OCX Modeling, & Simulation',
          location: 'Booz Allen Hamilton',
        },
        { title: 'Researcher, GPS Lab', location: 'Stanford University' },
        {
          title: 'PhD & MS Aeronautics & Astronautics',
          location: 'Stanford University',
        },
      ],
      hobbies: 'Movies, MMA',
    },
    {
      name: 'Jerami Martin',
      image: require('../images/team/jerami-martin.jpg'),
      linkedIn: 'https://www.linkedin.com/in/jerami-m-martin-/',
      role: 'Mechanical Lead',
      experience: [
        {
          title: 'Mechanical Design Engineer',
          location: 'Pumpkin Space Systems',
        },
        {
          title: 'PhD & MS Aeronautics & Astronautics',
          location: 'Stanford University',
        },
      ],
      hobbies: 'Backpacking, Traveling, Art & Design',
    },
    {
      name: 'Miguel Seun Cardoso',
      image: require('../images/team/miguel-seun-cardoso.jpg'),
      linkedIn: 'https://www.linkedin.com/in/miguel-seun-cardoso-22693914/',
      role: 'European Operations Lead',
      experience: [
        {
          title: 'MIF London Business School',
          location: 'International Exchange Colombia Business School',
        },
        { title: 'Director', location: 'SimplyAds Media' },
        {
          title: 'Investment Banking',
          location: 'FBNQuest',
        },
      ],
      hobbies: 'Morning Workouts, Traveling, Afrobeats',
    },
    {
      name: 'Ashish Goel',
      image: require('../images/team/ashish-goel.jpg'),
      linkedIn: 'https://www.linkedin.com/in/ashish-goel-4765621a/',
      role: 'Consultant',
      experience: [
        {
          title: 'Research Technologist',
          location: 'NASA Jet Propulsion Laboratory',
        },
        {
          title: 'Postdoctoral Researcher',
          title2: 'Graduate Aerospace Laboratories',
          location: 'Stanford University',
        },
        {
          title: 'PhD & MS Aeronautics & Astronautics',
          location: 'Stanford University',
        },
      ],
      hobbies: 'Hiking, Mountaineering, Skiing, Climbing, Birding',
    },
  ],
};

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// DATA FOR THE CONTACT PAGE
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

const contact = {
  hero: {
    heading: 'Get in touch',
    subHeading1: 'Address',
    subHeading2: 'Follow Us',
    address: {
      line1: '157 South Blvd',
      line2: 'San Mateo, CA 94402',
    },
  },
};

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// DATA FOR THE CAREERS PAGE
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

const careers = {
  hero: {
    heading:
      'At Xona, our success is dependent upon building an agile team that thrives on doing more with less.',
    subHeading: 'Join us!',
    backgroundImage: require('../images/backgroundImages/star-trails.jpg'),
  },
  benefits: [
    {
      // The strings stored in icon are from Ionicons, which is a free source of SVG icons.
      // The string provided, if it matches an icon in their database, will output that icon on the site.
      // Look through available icons here: https://ionicons.com/
      // Click on one and you will get the web component code, but ignore that and just copy and paste the value listed in the name="<COPY-THIS-VALUE>"
      // It will be something like "heart" or "heart-outline" or "heart-sharp"
      icon: 'train-outline',
      heading: 'Close to Public Transportation',
      text:
        'Our office is within walking distance of the Hayward Park Caltrain Station and has easy access to highways 101 and 92',
    },
    {
      icon: 'airplane-outline',
      heading: 'Open Vacation Policy',
      text:
        'We love our hobbies and value work-life balance so we offer an open vacation policy',
    },
    {
      icon: 'cafe-outline',
      heading: 'Free Snacks and Beverages',
      text:
        'Whatever snacks and beverages you need to help get you through the day',
    },
    {
      icon: 'heart-outline',
      heading: 'Health Care',
      text: 'We offer comprehensive medical, dental, and vision insurance',
    },
    {
      icon: 'calendar-outline',
      heading: 'Parental Leave',
      text:
        'Twelve weeks fully paid parental leave with the flexibility to use it when you need to',
    },
  ],
  availabilities: {
    heading: 'Available Positions',
    buttonText: 'More Info',
  },
  // Every available position should be listed in this array
  positions: [
    {
      // _uid is simply the unique ID for that specific job. Make sure not to use the same one for another position
      _uid: 'SrEng1',
      title: 'Sr. Software Engineer',
      area: 'Engineering',
      location: 'San Mateo, CA',
      timeCommitment: 'Full-time',
      // Descriptions are seperated up by paragraph, and all will de displayed in order on that specific positions page
      description: [
        'Modern intelligent systems such as self-driving cars, aerial mobility, and mobile robotics have phenomenal potential to make all forms of transportation more efficient and safer. However, to realize the full extent of this potential, these systems must be able to navigate safely in any environment, anywhere on the planet. The most ubiquitous and widely used source of navigation, GNSS (commonly referred to as GPS), cannot deliver the precision or security needed to support these industries.',
        'Xona is at the forefront of making precise and resilient navigation available on a global scale to help the age of autonomy expand its reach to everyone who can stand to benefit from it. Our success is dependent upon building an agile and diverse team that is excited about building things that have a real-world impact. We are curious, passionate, innovative, and thrive in a collaborative environment. Experience with space-tech is not required, and even if you don’t meet many of the desired qualifications below we would still love to connect and receive an application from you!',
        'Xona is looking for a Sr. Software Engineer to join our Navigation Systems team. Here you’ll be responsible for leading the development of state-of-the-art software for a new generation of satellite navigation systems. You’ll work hand-in-hand with domain experts to implement and deploy novel algorithms and schema for precision navigation and state estimation on test and flight hardware. As we progress towards the first launch you’ll support system integration, debugging, and hardware in the loop testing with the flight hardware to get your hard work into space!',
      ],
      // Each will de diplsayed in order
      desiredQualifications: [
        'Bachelor’s or Master’s degree in Computer Science, Electrical Engineering, Mechanical Engineering, Aerospace Engineering or a relevant field',
        '5+ years of professional software development experience',
        'Experience with embedded software design and implementation for automotive, industrial, aerospace/military, or other safety-critical systems',
        'Proven success in a fast-paced, cross-functional engineering team environment',
        'Experience building and executing test plans to validate software for production release',
        'Understanding of GPS, GNSS, or other forms of navigation / localization',
        'Familiarity with orbital mechanics, estimation theory, Kalman Filtering',
      ],
      requiredQualifications: [
        'All candidates must be either a U.S. Citizen or Permanent Resident (Green Card holder) due to U.S. export control regulations.',
      ],
    },
    {
      // _uid is simply the unique ID for that specific job. Make sure not to use the same one for another position
      _uid: 'JrEng1',
      title: 'Jr. Software Engineer',
      area: 'Engineering',
      location: 'San Mateo, CA',
      timeCommitment: 'Part-time',
      // Descriptions are seperated up by paragraph, and all will de displayed in order on that specific positions page
      description: [
        'Modern intelligent systems such as self-driving cars, aerial mobility, and mobile robotics have phenomenal potential to make all forms of transportation more efficient and safer. However, to realize the full extent of this potential, these systems must be able to navigate safely in any environment, anywhere on the planet. The most ubiquitous and widely used source of navigation, GNSS (commonly referred to as GPS), cannot deliver the precision or security needed to support these industries.',
        'Xona is at the forefront of making precise and resilient navigation available on a global scale to help the age of autonomy expand its reach to everyone who can stand to benefit from it. Our success is dependent upon building an agile and diverse team that is excited about building things that have a real-world impact. We are curious, passionate, innovative, and thrive in a collaborative environment. Experience with space-tech is not required, and even if you don’t meet many of the desired qualifications below we would still love to connect and receive an application from you!',
        'Xona is looking for a Jr. Software Engineer to join our Navigation Systems team. Here you’ll be responsible for leading the development of state-of-the-art software for a new generation of satellite navigation systems. You’ll work hand-in-hand with domain experts to implement and deploy novel algorithms and schema for precision navigation and state estimation on test and flight hardware. As we progress towards the first launch you’ll support system integration, debugging, and hardware in the loop testing with the flight hardware to get your hard work into space!',
      ],
      // Each will de diplsayed in order
      desiredQualifications: [
        'Bachelor’s in Computer Science, Electrical Engineering, Mechanical Engineering, Aerospace Engineering or a relevant field',
        '1+ years of professional software development experience',
        'Experience with embedded software design and implementation for automotive, industrial, aerospace/military, or other safety-critical systems',
        'Proven success in a fast-paced, cross-functional engineering team environment',
        'Experience building and executing test plans to validate software for production release',
        'Understanding of GPS, GNSS, or other forms of navigation / localization',
        'Familiarity with orbital mechanics, estimation theory, Kalman Filtering',
      ],
      requiredQualifications: [
        'All candidates must be either a U.S. Citizen or Permanent Resident (Green Card holder) due to U.S. export control regulations.',
      ],
    },
  ],
};

// EXPORT
export { logos, home, about, contact, careers, socials };
