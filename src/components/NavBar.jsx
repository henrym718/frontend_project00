import Modal from './Modal';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LoginForm from './LoginForm';

export default function NavBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <NavLink to={'/'} className="login-nav-link">
                    LOGO
                </NavLink>
            </div>
            <div className="navbar-menu">
                <NavLink to={'/seller-register'} className="login-nav-link">
                    Conviértete en vendedor
                </NavLink>
                <NavLink to={'/register'} className="login-nav-link">
                    <button className="navbar-button">Iniciar sesión</button>
                </NavLink>
                <button onClick={openModal} className="navbar-button">
                    Únete
                </button>
            </div>

            {isModalOpen && (
                <Modal isOpen={openModal} onClose={closeModal}>
                    <LoginForm onClose={closeModal} />
                </Modal>
            )}
        </div>
    );
}
