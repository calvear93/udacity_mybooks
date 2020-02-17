import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../resources/icons/icon.png';

class AppNavbar extends React.Component
{
    render()
    {
        return (
            <Navbar bg='primary' variant='dark'>
                <Navbar.Brand href='/'>
                    <img
                        alt=''
                        src={Logo}
                        width='24'
                        height='24'
                        className='d-inline-block align-top'
                    />
                      Udacity MyReads
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default AppNavbar;
