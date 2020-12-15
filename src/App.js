import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';

// AOS library
import Aos from 'aos';
// Remember to add a concat:css task to the build process for this aos stylesheet

import Navigation from './components/Navigation/Navigation';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Careers from './components/Pages/Careers';

function App() {
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
                        { name: 'Home', path: '/xona-space' },
                        { name: 'About', path: '/about' },
                        { name: 'Contact', path: '/contact' },
                        { name: 'Careers', path: '/careers' },
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
            </Router>
        </div>
    );
}

export default App;
