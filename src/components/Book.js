import PropTypes from 'prop-types';
import React from 'react';
import ShelfBookMenu from './ShelfBookMenu';
import * as BooksAPI from '../utils/BooksAPI';

/**
 * Book component.
 *
 * @param {element} book Book JS object.
 * @param {func} onChange callback on book shelf change.
 *
 * @class Book
 * @extends {React.PureComponent}
 */
class Book extends React.Component
{
    /**
     * Updates the current shelf
     * of the book to the API on change.
     *
     * @param {string} shelf New shelf for the book..
     *
     * @memberof Book
     */
    onChangeBookShelf = (shelf) =>
    {
        const { book, onChange } = this.props;
        // Updates the book shelf.
        BooksAPI
            .update(book, shelf)
            .then((books) =>
            {
                onChange && onChange(book, book.shelf || 'none', shelf, books);
            });
    }

    /**
     * Renders the book component.
     *
     * @returns {any} JSX book.
     * @memberof Book
     */
    render()
    {
        const { book } = this.props;

        return (
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-cover'
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url("${book.imageLinks.thumbnail}")`
                        }}
                    />

                    <ShelfBookMenu
                        bookId={book.id}
                        shelf={book.shelf}
                        onChange={this.onChangeBookShelf}
                    />
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>{book.authors}</div>
            </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.objectOf(PropTypes.any),
    onChange: PropTypes.func.isRequired
};

export default Book;
