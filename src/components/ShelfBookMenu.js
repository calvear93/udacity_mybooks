import React from 'react';

class ShelfBookMenu extends React.PureComponent
{
    onSelfChange = (event) =>
    {
        const { onChange } = this.props;
        onChange && onChange(event.target.value);
    }

    render()
    {
        const { shelf: currentShelf } = this.props;

        return (
            <div className='book-shelf-changer'>
                <select onChange={this.onSelfChange} defaultValue='move'>
                    <option value='move' disabled>Move to...</option>
                    <option value='currentlyReading' disabled={currentShelf === 'currentlyReading'}>Currently Reading</option>
                    <option value='wantToRead' disabled={currentShelf === 'wantToRead'}>Want to Read</option>
                    <option value='read' disabled={currentShelf === 'read'}>Read</option>
                    <option value='none'>None</option>
                </select>
            </div>
        );
    }
}

export default ShelfBookMenu;
