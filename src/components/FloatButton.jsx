import Tippy from '@tippy.js/react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class FloatButton extends React.Component
{
    render()
    {
        let { to, tooltip, className, variant } = this.props;

        return (
            <Link to={to} >
                <Tippy content={tooltip}>
                    <div className={className}>
                        <Button variant={variant} />
                    </div>
                </Tippy>
            </Link>
        );
    }
}

export default FloatButton;
