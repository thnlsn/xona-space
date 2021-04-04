import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
} from 'react-router-dom';
import './css/style.css';

import ScrollToTop from './components/Components/ScrollToTop';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import Home from './components/Pages/Home';
import News from './components/Pages/News';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Careers from './components/Pages/Careers';
import Apply from './components/Pages/Apply';
import NotFound from './components/Pages/NotFound';

// Importing all data for this component from the database file
import { socials } from './data/database';

const App = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => <Home />,
    },
    {
      path: '/news',
      exact: true,
      main: () => <News />,
    },
    {
      path: '/about',
      exact: true,
      main: () => <About />,
    },
    {
      path: '/contact',
      exact: true,
      main: () => <Contact />,
    },
    {
      path: '/careers',
      exact: true,
      main: () => <Careers />,
    },
    {
      path: '/careers/:careerId',
      exact: true,
      main: () => <Apply />,
    },
    /*     {
      path: '*',
      main: () => <NotFound />,
    }, */
  ];

  return (
    <div className='App'>
      <HashRouter>
        <ScrollToTop />
        <Navigation
          items={[
            { name: 'Home', path: '/', exact: true },
            { name: 'About', path: '/about', exact: false },
            { name: 'Contact', path: '/contact', exact: false },
            { name: 'Careers', path: '/careers', exact: false },
          ]}
        />
        <main className='main'>
          {/* <Switch> */}
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
          {/* </Switch> */}
        </main>
        <Footer socials={socials} />
      </HashRouter>
    </div>
  );
};

export default App;
