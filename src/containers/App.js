import React from 'react';
import { Route } from 'react-router-dom';
import FloatButton from '../components/FloatButton';
import AppNavbar from '../components/Navbar';
import Shelf from '../components/Shelf';
import '../styles/App.css';

/**
 * TODO: Adds PropTypes to each component.
 */
class BooksApp extends React.Component
{
    render()
    {
        return (
            <div className='app'>
                <AppNavbar />

                <Route exact path='/' render={() => (
                    <div className='list-books-content'>
                        <Shelf title='Currently Reading' />

                        <FloatButton
                            to='/search'
                            variant='success'
                            tooltip='Add new book'
                            className='float-button open-search'
                        />
                    </div>
                )}
                />
                <Route path='/search' render={() => (
                    <div>
                        <i className='mdi mdi-magnify' />

                        <FloatButton
                            to='/'
                            variant='danger'
                            tooltip='Go back'
                            className='float-button go-back'
                        />
                    </div>
                )}
                />
            </div>
        );
    }
}

export default BooksApp;
