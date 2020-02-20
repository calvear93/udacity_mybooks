import PropTypes from 'prop-types';
import React from 'react';
import LazyLoad from 'react-lazyload';
import * as BooksAPI from '../utils/BooksAPI';
import BookCover from './BookCover';
import ShelfBookMenu from './ShelfBookMenu';

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
                    <LazyLoad
                        height={200}
                        offset={100}
                        debounce={200}
                        placeholder={
                            <BookCover url={'https://www.zumlume.com/assets/frontend/images/default-book.png'} />
                        }
                        once
                    >
                        <BookCover url={book.imageLinks.thumbnail} />
                    </LazyLoad>

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
