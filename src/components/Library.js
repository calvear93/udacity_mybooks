import PropTypes from 'prop-types';
import React from 'react';
import Book from '../components/Book';

/**
 * Library React component.
 *
 * @param {books} book Book JS object.
 * @param {func} onChange callback on book shelf change.
 *
 * @class Library
 * @extends {React.Component}
 */
class Library extends React.Component
{
    /**
     * Renders the library component.
     *
     * @returns {any} JSX library.
     * @memberof Library
     */
    render()
    {
        const { books, onBookChange } = this.props;

        return (
            <div className='search-books'>
                <div className='search-books-results'>
                    <ol className='books-grid'>
                        {
                            books
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

Library.propTypes = {
    books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
    onBookChange: PropTypes.func.isRequired
};

export default Library;
