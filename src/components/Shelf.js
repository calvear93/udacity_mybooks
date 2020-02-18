import React from 'react';
import Book from '../components/Book';

class Shelf extends React.Component
{
    render()
    {
        const { title } = this.props;

        return (
            <div className='bookshelf'>
                <h3 className='bookshelf-title'>{title}</h3>
                <div className='bookshelf-books'>
                    <ol className='books-grid'>
                        <li>
                            <Book id='test-id' title='To Kill a Mockingbird' authors='Harper Lee' coverUrl='http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api' />
                        </li>
                        <li>
                            <Book id='test-id2' shelf='currentlyReading' title="Endlee's Game" authors='Orson Scott Card' coverUrl='http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api' />
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Shelf;
