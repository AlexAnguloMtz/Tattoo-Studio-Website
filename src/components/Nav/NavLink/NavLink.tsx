import './NavLink.scss';

export const NavLink: React.FC<Props> = ({ text }) => {
    return (
        <li className='nav__li'>
            <a href="#" className='nav__link'>
                <span className='nav__link-text'>{text}</span>
            </a>
        </li>
    );
}

interface Props {
    text: string
}