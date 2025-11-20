'use client'

function Header() {
    return (
        <div className="container">
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
                    <button className="header-btn">Sign in</button>
                    <button className="header-btn">Sign up</button>
                    <div className="header-profil-img-box">
                        <img src="/images.png" alt="profile" className="profil-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;