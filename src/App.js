import React from 'react';
import './css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Careers from './components/Pages/Careers';

function App() {
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => <Home />,
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
  ];

  return (
    <div className='App'>
      <Router>
        <Navigation
          items={[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
            { name: 'Careers', path: '/careers' },
          ]}
        />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;
