import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

/**
 * FloatButton React component.
 *
 * @param {string} to Route for use on click.
 * @param {string} tooltip Tooltip for show on button.
 * @param {string} className Class for component.
 * @param {string} variant Bootstrap variant.
 *
 * @class FloatButton
 * @extends {React.PureComponent}
 */
class FloatButton extends React.PureComponent
{
    /**
     * Renders a floating button at right bottom corner.
     *
     * @returns {any} FloatButton JSX.
     * @memberof FloatButton
     */
    render()
    {
        const { to, tooltip, className, variant } = this.props;

        return (
            <Link to={to}>
                <div className={className}>
                    <Tooltip
                        title={tooltip}
                        animation='perspective'
                        inertia
                        position='left-start'
                        touch
                        delay={[ 200, 60 ]}
                        arrow
                        theme='transparent'
                    >
                        <Button variant={variant} />
                    </Tooltip>
                </div>
            </Link>
        );
    }
}

FloatButton.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    variant: PropTypes.string
};

export default FloatButton;
