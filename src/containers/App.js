import React from 'react';
import { Route } from 'react-router-dom';
import FloatButton from '../components/FloatButton';
import AppNavbar from '../components/Navbar';
import Shelf from '../components/Shelf';
import Searchbar from '../components/Searchbar';
import '../styles/App.css';
import * as BooksAPI from '../utils/BooksAPI';

/**
 * Main app container.
 *
 * @class BooksApp
 * @extends {React.Component}
 */
class BooksApp extends React.Component
{
    /**
     * States for the container.
     *
     * @memberof BooksApp
     */
    state = {
        books: []
    }

    /**
     * Fills the datasource after component mounting.
     *
     * @memberof BooksApp
     */
    componentDidMount()
    {
        BooksAPI
            .getAll()
            .then((books) =>
            {
                this.setState({ books });
            });
    }

    /**
     * Updates container state after any book shelf change.
     *
     * @param {element} book Book for update.
     * @param {string} previousShelf Previous book shelf.
     * @param {string} newShelf New book shelf.
     *
     * @memberof BooksApp
     */
    onBookChange = (book, previousShelf, newShelf) =>
    {
        const { books } = this.state;

        book.shelf = newShelf;
        books[books.indexOf(book)] = book;
        this.setState({ books });
    }

    /**
     * Searches the query by the API and updates datasources..
     *
     * @param {string} query Query for search.
     *
     * @memberof BooksApp
     */
    onSearch = (query) =>
    {
        const { books } = this.state;

        console.log(query);
    }

    /**
     * Renders main BookApp container.
     *
     * @returns {any} JSX books app.
     * @memberof BooksApp
     */
    render()
    {
        return (
            <div className='app'>
                <AppNavbar />

                <Route exact path='/' render={() => (
                    <div className='list-books-content'>
                        <Shelf
                            shelf='currentlyReading'
                            title='Currently Reading'
                            books={this.state.books}
                            onBookChange={this.onBookChange}
                        />
                        <Shelf
                            shelf='wantToRead'
                            title='Want To Reading'
                            books={this.state.books}
                            onBookChange={this.onBookChange}
                        />
                        <Shelf
                            shelf='read'
                            title='Read'
                            books={this.state.books}
                            onBookChange={this.onBookChange}
                        />

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
                        <Searchbar onChange={this.onSearch} />

                        <div className='search-books'>

                            <div className='search-books-results'>
                                <ol className='books-grid' />
                            </div>
                        </div>

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
