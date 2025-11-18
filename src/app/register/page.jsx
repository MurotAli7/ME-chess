'use client'
import { useState, useEffect } from "react";
import '../../styles/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    // Bootstrap JS faqat clientda ishlash uchun
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setEmailError('Email manzil kiritilishi shart.');
            return false;
        } else if (!regex.test(email)) {
            setEmailError('Iltimos, yaroqli email manzil kiriting.');
            return false;
        }

        setEmailError('');
        return true;
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateEmail(email)) {
            console.log("Jo'natilmoqda:", { email, password });
        } else {
            console.log("Email validatsiyasida xatolik bor.");
        }
    };

    return(
        <div className="register-container">
            <div className="register">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-text">ME CHESS</h1>

                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <i className="bi bi-envelope-fill"></i>
                    </div>

                    {emailError && <p className="login-error-text">{emailError}</p>}

                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="bi bi-lock-fill"></i>
                    </div>

                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Chess.com username"
                        />
                        <i className="bi bi-person-fill"></i>
                    </div>

                    <button type="submit" className="login-btn">SUBMIT</button>
                    <a href="/" className="register-link">Already an account?</a>
                </form>
            </div>
        </div>
    );
}

export default Register;
