import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FloatButton from '../components/FloatButton';
import Library from '../components/Library';
import AppNavbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Shelf from '../components/Shelf';
import '../styles/App.css';
import * as BooksAPI from '../utils/BooksAPI';
import 'linqjs'; // https://github.com/joaom182/linqjs

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
        query: '',
        books: [],
        booksSearched: []
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
        book.shelf = newShelf;

        if (book.fromSearching && previousShelf === 'none')
        {
            this.addBook(book);
        }
        else
        {
            this.moveBook(book);
        }
    }

    /**
     * Adds a book from searching
     * to the shelves array.
     *
     * @param {object} book new book.
     *
     * @memberof BooksApp
     */
    addBook = (book) =>
    {
        this.setState((currentState) => ({ books: [ ...currentState.books, book ] }));
    }

    /**
     * Moves a book between shelves.
     *
     * @param {object} book moved book.
     *
     * @memberof BooksApp
     */
    moveBook = (book) =>
    {
        const { books, booksSearched } = this.state;

        this.updateBook(books, book.id, book.shelf);
        this.updateBook(booksSearched, book.id, book.shelf);

        this.setState({
            books: [ ...books.where((b) => b.id !== book.id || book.shelf !== 'none') ],
            booksSearched: [ ...booksSearched ]
        });
    }

    /**
     * Updates a book shelf from a collection.
     *
     * @param {array} books books collection.
     * @param {number} bookId book Id.
     * @param {string} shelf new shelf.
     *
     * @memberof BooksApp
     */
    updateBook = (books, bookId, shelf) =>
    {
        // Search for current book in collection.
        let book = books
            .first((b) => b.id === bookId);

        if (book)
        {
            // Updates book shelf.
            book.shelf = shelf;
        }
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
        // Empty query handling.
        if (query === '')
        {
            this.setState({ query });

            return;
        }

        BooksAPI
            .search(query)
            .then((response) =>
            {
                if (response.error)
                {
                    this.setState({ query, booksSearched: [] });
                }
                else
                {
                    // Gets shelf from each book in shelves in a dictionary.
                    const shelves = this.state.books
                        .toDictionary((b) => b.id, (b) => b.shelf);
                    // Appends 'shelf' to searched books with matching id.
                    response
                        .forEach((b) =>
                        {
                            b.shelf = shelves[b.id] || 'none';
                            b.fromSearching = true;
                        });

                    this.setState({ query, booksSearched: response });
                }
            });
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
                <Switch>
                    <Route exact path='/' render={() => (
                        <div className='list-books-content'>
                            <AppNavbar />

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

                    <Route exact path='/search' render={() => (
                        <div>
                            <Searchbar
                                query={this.state.query}
                                onChange={this.onSearch}
                            />

                            <Library
                                query={this.state.query}
                                books={this.state.booksSearched}
                                onBookChange={this.onBookChange}
                            />

                            <FloatButton
                                to='/'
                                variant='danger'
                                tooltip='Go back'
                                className='float-button go-back'
                            />
                        </div>
                    )}
                    />

                    <Route render={() => (
                        <div className='not-found-container books-grid'>
                            <label>Page not found!</label>
                        </div>
                    )}
                    />
                </Switch>
            </div>
        );
    }
}

export default BooksApp;
