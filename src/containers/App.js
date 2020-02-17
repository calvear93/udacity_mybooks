import React from 'react';
import { Route } from 'react-router-dom';
import FloatButton from '../components/FloatButton';
import AppNavbar from '../components/Navbar';
import '../styles/App.css';

class BooksApp extends React.Component
{
  state = {
  }

  render()
  {
      return (
          <div className='app'>
              <AppNavbar />

              <Route exact path='/' render={() => (
                  <FloatButton
                      to='/search'
                      variant='success'
                      tooltip='Add new book'
                      className='float-button open-search'
                  />
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