'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {

    const [image, setImage] = useState(null);
      
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    };


    const router = useRouter();

    function handleBtn() {
        router.push("/register");
    }

    function handleClick() {
        router.push("/login");
    }

    return (
        <div className="header">
            <div className="header-logo">
                <img src="/ME_CHESS.png" alt="logo" className="logo" />
                <h1 className="header-title">ME<br />Chess</h1>
            </div>

            <div className="header-link-box">
                <a href="/" className="header-link">Home</a>
                <a href="/players" className="header-link">Players</a>
                <a href="/tournament" className="header-link">Tournament</a>
                <a href="/admin" className="header-link">Admin</a>
            </div>

            <div className="header-box">
                <button onClick={handleClick} className="header-btn">Sign in</button>
                <button onClick={handleBtn} className="header-btn">Sign up</button>

                    <div className="profile-container">
                        <div className="image-wrapper">
                          <img
                            src={image || "./images1.png"}
                            alt="Profile"
                            className="profile-image"
                          />
                          <label htmlFor="fileInput" className="icon-button">
                          +
                          </label>
                        </div>

                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="profile-input"
                            onChange={handleImageChange}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Header;
