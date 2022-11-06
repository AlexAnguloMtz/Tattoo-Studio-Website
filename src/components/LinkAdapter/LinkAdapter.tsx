import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LinkAdapter.scss';

export const LinkAdapter: FC<Props> = ({
    to,
    onClick = undefined,
    className = '',
    key = '',
    children = undefined
}) => {

    const ref = useRef<HTMLAnchorElement>(null);

    return (
        <Link
            ref={ref}
            className='link-adapter'
            to={to}
            key={key}
        >
            <div
                className={className}
                onClick={onClick}>
                {children}
            </div>
        </Link>
    );
}

interface Props {
    to: string,
    key?: string,
    className?: string,
    onClick?: () => void,
    children?: JSX.Element | JSX.Element[] | string,
}