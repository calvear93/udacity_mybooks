import PropTypes from 'prop-types';
import React from 'react';
import Book from '../components/Book';

/**
 * Shelf React component.
 *
 * @param {string} title Description of the shelf.
 * @param {string} shelf Current shelf name.
 * @param {arrayOf} books List of all books.
 * @param {func} onBookChange Triggers on any book's shelf change.
 *
 * @class Shelf
 * @extends {React.Component}
 */
class Shelf extends React.Component
{

    /**
     * Renders the shelf component.
     *
     * @returns {any} JSX shelf.
     * @memberof Shelf
     */
    render()
    {
        const { title, shelf, books, onBookChange } = this.props;

        return (
            <div className='bookshelf'>
                <h3 className='bookshelf-title'>{title}</h3>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        {
                            books
                                .filter((book) => book.shelf === shelf)
                                .map((book) => (
                                    <li key={book.id}>
                                        <Book book={book} onChange={onBookChange} />
                                    </li>
                                ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

Shelf.propTypes = {
    books: PropTypes.arrayOf,
    onBookChange: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Shelf;
