import React from 'react';

/**
 * Searchbar component.
 *
 * @class Searchbar
 * @extends {React.PureComponent}
 */
class Searchbar extends React.PureComponent
{
    state = {
        value: ''
    }

    componentDidUpdate()
    {
        const { onChange } = this.props;
        onChange && onChange(this.state.value);
    }

    /**
     * Handles the input change for searching.
     *
     * @param {any} event object containing 'input' onChange info.
     * @memberof ShelfBookMenu
     */
    onSearchChange = (event) =>
    {
        this.setState({ value: event.target.value });
    }

    /**
     * Renders the searchbar component.
     *
     * @returns {any} Searchbar JSX.
     * @memberof Searchbar
     */
    render()
    {
        return (
            <div className='search-books-bar'>
                <div className='search-books-input-wrapper'>
                    <input
                        type='text'
                        placeholder='Search by title or author'
                        value={this.state.value}
                        onChange={this.onSearchChange}
                    />
                </div>
            </div>
        );
    }
}

export default Searchbar;
