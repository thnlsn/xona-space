import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import './css/style.css';

// AOS library
import Aos from 'aos';
// Remember to add a concat:css task to the build process for this aos stylesheet

import ScrollToTop from './components/Components/ScrollToTop';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Careers from './components/Pages/Careers';
import News from './components/Pages/News';

// Importing all data for this component from the database file
import { socials } from './data/database';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []); // Empty array as second parameter mimics componentDidMount, so only fires on pageload

  const routes = [
    {
      path: '/xona-space',
      exact: true,
      main: () => <Home />,
    },
    {
      path: '/xona-space/about',
      exact: true,
      main: () => <About />,
    },
    {
      path: '/xona-space/contact',
      exact: true,
      main: () => <Contact />,
    },
    {
      path: '/xona-space/careers',
      exact: true,
      main: () => <Careers />,
    },
    {
      path: '/xona-space/news',
      exact: true,
      main: () => <News />,
    },
  ];

  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navigation
          items={[
            { name: 'Home', path: '/xona-space', exact: true },
            { name: 'About', path: '/xona-space/about', exact: false },
            { name: 'Contact', path: '/xona-space/contact', exact: false },
            { name: 'Careers', path: '/xona-space/careers', exact: false },
          ]}
        />
        <main className='main'>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </main>
        <Footer socials={socials} />
      </Router>
    </div>
  );
};

export default App;
