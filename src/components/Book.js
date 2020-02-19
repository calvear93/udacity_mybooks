import React from 'react';
import ShelfBookMenu from './ShelfBookMenu';
import * as BooksAPI from '../utils/BooksAPI';

class Book extends React.PureComponent
{
    onChangeBookShelf = (shelf) =>
    {
        const { book, onChange } = this.props;

        BooksAPI
            .update(book, shelf)
            .then((books) =>
            {
                onChange && onChange(book, book.shelf, shelf, books);
            });
    }

    render()
    {
        const { book } = this.props;

        return (
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }} />
                    <ShelfBookMenu bookId={book.id} shelf={book.shelf} onChange={this.onChangeBookShelf} />
                </div>
                <div className='book-title'>{book.title}</div>
                <div className='book-authors'>{book.authors}</div>
            </div>
        );
    }
}

export default Book;
