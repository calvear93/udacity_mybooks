import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

class FloatButton extends React.Component
{
    render()
    {
        let { to, tooltip, className, variant } = this.props;

        return (
            <Link to={to} >
                <div className={className}>
                    <Tooltip
                        title={tooltip}
                        animation='perspective'
                        inertia
                        position='left-start'
                        touch
                        delay={[ 100, 40 ]}
                        arrow
                        theme='light'
                    >
                        <Button variant={variant} />
                    </Tooltip>
                </div>
            </Link>
        );
    }
}

export default FloatButton;
