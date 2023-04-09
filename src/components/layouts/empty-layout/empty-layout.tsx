import React from 'react';

interface IProps {
    children: any;
}

const EmptyLayout: React.FC<IProps> = (props) => {
    return <div>{props.children}</div>;
};

export default EmptyLayout;
