import PropTypes from 'prop-types';
import React from 'react';

/**
 * Menu for Shelf.
 *
 * @param {string} shelf Book shelf.
 *
 * @class ShelfBookMenu
 * @extends {React.PureComponent}
 */
class ShelfBookMenu extends React.PureComponent
{
    /**
     * Handles the shelf selection from menu.
     *
     * @param {any} event object containing 'select' onChange info.
     * @memberof ShelfBookMenu
     */
    onSelfChange = (event) =>
    {
        const { onChange } = this.props;
        onChange && onChange(event.target.value);
    }

    /**
     * Renders the Shelf book menu.
     *
     * @returns {any} Shelf menu JSX.
     * @memberof ShelfBookMenu
     */
    render()
    {
        const { shelf: currentShelf } = this.props;

        return (
            <div className='book-shelf-changer'>
                <select onChange={this.onSelfChange} defaultValue={currentShelf}>
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

ShelfBookMenu.propTypes = {
    onChange: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired
};

export default ShelfBookMenu;
