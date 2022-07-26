import React from 'react';
import './index.scss';
import perfil from 'assets/imgs/guitar.png';
import useKeypress from 'hooks/useKeypress';

interface IProps {}

const Bar: React.FC<IProps> = () => {


    const handleToogleMenu = () => {
        let nav = document.getElementById('navbar');
        nav?.classList.toggle('show-menu')
    }

    useKeypress('Escape', () => {
        handleToogleMenu();
    });

    return (
        <header className="header">
            <div className="header__container">
                <img src={perfil} alt="perfil" className="header__img" />

                <a href="#" className="header__logo">DixonAlbi</a>

                <div className="header__toggle">
                    <i className='bx bx-menu' onClick={handleToogleMenu}></i>
                </div>
            </div>
        </header>
    )
}

export default Bar
