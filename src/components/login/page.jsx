// Login.jsx
'use client'
import { useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Login() {
    // Input qiymatlari va xato xabari uchun state'lar
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    // Emailni tekshirish funksiyasi
    const validateEmail = (email) => {
        // Oddiy email regex'i
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Email manzil kiritilishi shart.');
            return false;
        } else if (!regex.test(email)) {
            setEmailError('Iltimos, yaroqli email manzil kiriting.');
            return false;
        }
        setEmailError(''); // Xato yo'q bo'lsa
        return true;
    };

    // Email input o'zgarganda
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail); // Har bir o'zgarishda tekshirish
    };

    // Form jo'natilganda
    const handleSubmit = (e) => {
        e.preventDefault(); // Sahifani yangilanishini oldini olish
        
        // Jo'natishdan oldin oxirgi tekshiruv
        if (validateEmail(email)) {
            // Hamma narsa to'g'ri bo'lsa
            console.log('Ma\'lumotlar jo\'natilmoqda:', { email, password });
            // Bu yerda sizning serverga murojaat logikangiz bo'ladi
        } else {
            console.log('Validatsiyada xatolik bor.');
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 ">
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