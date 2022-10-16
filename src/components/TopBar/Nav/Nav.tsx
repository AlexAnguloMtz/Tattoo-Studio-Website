import './Nav.scss'

export const Nav: React.FC<Props> = ({ isVisible }) => {

    return (
        <div className={`nav ${isVisible ? ' visible' : ''}`}>
            <a className='nav__link'>
                Cotización
            </a>
            <a className='nav__link'>
                Trabajos Previos
            </a>
            <a className='nav__link'>
                FAQ
            </a>
            <a className='nav__link'>
                Contacto
            </a>
        </div>
    );
}

interface Props {
    isVisible: boolean
}