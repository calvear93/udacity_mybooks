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
        const { id, title, authors, coverUrl } = this.props;

        return (
            <div className='book'>
                <div className='book-top'>
                    <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }} />
                    <ShelfBookMenu bookId={id} onChange={this.onChangeBookShelf} />
                </div>
                <div className='book-title'>{title}</div>
                <div className='book-authors'>{authors}</div>
            </div>
        );
    }
}

export default Book;
