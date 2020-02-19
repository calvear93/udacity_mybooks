import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../resources/icons/icon.png';

/**
 * Navbar component.
 * Uses Bootstrap 4 for React.
 *
 * @class AppNavbar
 * @extends {React.PureComponent}
 */
class AppNavbar extends React.PureComponent
{

    /**
     * Renders the navbar component.
     *
     * @returns {any} Navbar JSX.
     * @memberof AppNavbar
     */
    render()
    {
        return (
            <Navbar bg='success' variant='dark'>
                <Navbar.Brand href='/' className='navbar-icon'>
                    <img
                        alt='Brand'
                        src={Logo}
                        width='24'
                        height='24'
                        className='d-inline-block align-top'
                    />
                      Udacity MyReads <small style={{ fontSize: 10 }}>by Cristopher Alvear</small>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default AppNavbar;
