'use client'
import { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

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
            console.log('Ma\'lumotlar jo\'natilmoqda:', { email, password });
        } else {
            console.log('Validatsiyada xatolik bor.');
        }
    };

    // Agar Bootstrap JS kerak bo‘lsa:
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
            <div className="login">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-text">ME CHESS</h1>
                    <div className="email-input">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <i className="bi bi-envelope-fill"></i>
                    </div>
                    {emailError && <p className="login-error-text">{emailError}</p>}
                    <div className="password-input">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <i className="bi bi-lock-fill"></i>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <a className="login-link" href="/register">Register now</a>
                </form>
            </div>
        </div>
    )
}

export default Login;
