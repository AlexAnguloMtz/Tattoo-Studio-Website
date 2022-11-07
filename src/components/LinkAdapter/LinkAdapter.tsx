import { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLoading } from '../../context/loading-context';
import './LinkAdapter.scss';

const timeBeforeClickEvent: number = 100;

export const LinkAdapter: FC<Props> = ({
    to,
    onClick = undefined,
    className = '',
    key = '',
    children = undefined
}) => {

    const { setLoading } = useLoading();

    const ref = useRef<HTMLAnchorElement>(null);

    const simulateClick = () => {
        return () => ref.current?.click();
    }

    // We need to set the global context of 'loading'
    // to true to launch the loading screen, then we 
    // wait a certain amount of time before launching 
    // the click event. This is to prevent flashing of content 
    // when loading, the loading screen will take care
    // of hiding these flashes of loading content, but we
    // need to provide it some time of advantage, so we
    // wait some miliseconds before firing the link click 
    // to navigate to another page
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setLoading(true);
        setTimeout(simulateClick(), timeBeforeClickEvent);
    }

    return (
        <Link
            ref={ref}
            className='link-adapter'
            to={to}
            key={key}
        >
            <div
                className={className}
                onClick={handleClick}>
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