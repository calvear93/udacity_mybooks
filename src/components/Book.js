import React from 'react';
import ShelfBookMenu from './ShelfBookMenu';

class Book extends React.PureComponent
{
    onChangeBookShelf = (bookId, shelf) =>
    {
        console.log(bookId, shelf);
    }

    render()
    {
        const { id, title, authors, coverUrl, shelf } = this.props;

        return (
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${coverUrl}")` }} />
                    <ShelfBookMenu bookId={id} shelf={shelf} onChange={this.onChangeBookShelf} />
                </div>
                <div className='book-title'>{title}</div>
                <div className='book-authors'>{authors}</div>
            </div>
        );
    }
}

export default Book;
