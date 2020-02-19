import PropTypes from 'prop-types';
import React from 'react';
import Interval from '../utils/Interval';

/**
 * Searchbar component.
 * Has a 'input debouncing' for
 * filtering out "spurious"
 * inputs while typing.
 *
 * @param {number} delay in ms for input debouncing.
 * @param {func} onChange callback on searching triggered.
 *
 * @class Searchbar
 * @extends {React.PureComponent}
 */
class Searchbar extends React.PureComponent
{
    /**
     * Creates an instance of Searchbar.
     * Initializes the Interval (chronometer)
     * for input debouncing.
     *
     * @param {object} props JSX component props.
     * @memberof Searchbar
     */
    constructor(props)
    {
        // Default value for delay in ms.
        const { delay = 600 } = props;

        super(props);
        // Sets up state properties. Initializes 'chronometer'.
        this.state = {
            value: '',
            chronometer: new Interval(delay, this.runSearch)
        };
    }

    /**
     * Triggered after component update.
     * Resets the chronometer for input debouncing.
     *
     * @memberof Searchbar
     */
    componentDidUpdate()
    {
        const { chronometer } = this.state;
        chronometer && chronometer.Reset();
    }

    /**
     * Executes the search in the callback.
     *
     * @memberof Searchbar
     */
    runSearch = () =>
    {
        const { chronometer } = this.state;
        const { onChange } = this.props;
        chronometer && chronometer.Stop();
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

Searchbar.propTypes = {
    delay: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

export default Searchbar;
