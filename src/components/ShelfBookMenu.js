import React from 'react';

class ShelfBookMenu extends React.PureComponent
{
    onSelfChange = (event) =>
    {
        const { bookId, onChange } = this.props;
        onChange && onChange(bookId, event.target.value);
    }

    render()
    {
        return (
            <div className='book-shelf-changer'>
                <select onChange={this.onSelfChange}>
                    <option value='move' disabled>Move to...</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                </select>
            </div>
        );
    }
}

export default ShelfBookMenu;
