'use client'

function Header() {
    return(
        <div className="container">
            <div className="header">
                <div className="header-logo">
                    <img src="./M1.jpg" alt="" className="logo" />
                    <h1 className="header-title">ME<br/>Chess Cup</h1>
                </div>
                <div className="header-link-box">
                    <a href="/" className="header-link">Home</a>
                    <a href="/players" className="header-link">Players</a>
                    <a href="/tournament" className="header-link">Tournament</a>
                    <a href="/admin" className="header-link">Admin</a>
                </div>
                <div className="header-box">
                    <button className="header-btn">Send ME</button>
                    <button className="header-btn">Contact us</button>
                    <div className="header-profil-img-box">
                        <img src="./images.png" alt="" className="profil-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
