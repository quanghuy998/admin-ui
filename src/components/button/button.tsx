import React from 'react';
import './button.scss';

interface IProps {
    children: any;
    className?: string;
}

const Button: React.FC<IProps> = (props) => {
    return <div className={'btn ' + props.className}>{props.children}</div>;
};

export default Button;
