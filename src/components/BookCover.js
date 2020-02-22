import PropTypes from 'prop-types';
import React from 'react';

/**
 * BookCover React component.
 *
 * @param {string} url Route for use on click.
 *
 * @class BookCover
 * @extends {React.PureComponent}
 */
class BookCover extends React.PureComponent
{
    /**
     * Renders the cover of a book.
     *
     * @returns {any} BookCover JSX.
     * @memberof BookCover
     */
    render()
    {
        const {
            url = 'https://www.zumlume.com/assets/frontend/images/default-book.png',
            shelf
        } = this.props;

        return (
            <div
                className={`book-cover ${shelf}`}
                style={{
                    width: 128,
                    height: 193,
                    backgroundSize: 'contain',
                    backgroundImage: `url("${url}")`
                }}
            />
        );
    }
}

BookCover.propTypes = {
    url: PropTypes.string
};

export default BookCover;
