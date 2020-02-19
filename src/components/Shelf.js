import React from 'react';
import Book from '../components/Book';

class Shelf extends React.Component
{
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

export default Shelf;
