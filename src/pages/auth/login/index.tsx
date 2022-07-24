import React from 'react'
import './index.scss'
import perfil from 'assets/imgs/perfil.jpg'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className='login'>
            <div className='login__hero'>
                <i className="fa-solid fa-code login__icon"></i>
                <span className="login__title">DixonAlbi</span>
            </div>
            <div className="login__form">
                <img src={perfil} alt="" className='login__img'/>
                <form className='form'>
                    <div className='form__input'>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div className='form__input'>
                        <label htmlFor="">Password</label>
                        <input type="password" />
                    </div>
                    <button className='btn' onClick={() => navigate('/')}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
