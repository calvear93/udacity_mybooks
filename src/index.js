import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { register } from 'register-service-worker';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-tippy/dist/tippy.css';
import './styles/index.css';

/**
 * App rendering.
 */
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root')
);

/**
 * Service Worker Logging.
 */
register('/service-worker.js', {
    registrationOptions: { scope: './' },
    ready (registration)
    {
        console.log('Service worker is active.');
    },
    registered (registration)
    {
        console.log('Service worker has been registered.');
    },
    cached (registration)
    {
        console.log('Content has been cached for offline use.');
    },
    updatefound (registration)
    {
        console.log('New content is downloading.');
    },
    updated (registration)
    {
        console.log('New content is available; please refresh.');
    },
    offline ()
    {
        console.log('No internet connection found. App is running in offline mode.');
    },
    error (error)
    {
        console.error('Error during service worker registration:', error);
    }
});
