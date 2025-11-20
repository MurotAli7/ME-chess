'use client'
import Header from "@/components/header/page";
import Login from "@/components/login/page";

function Home() {
    return (
        <div className="container-fluid p-0">
            <Header />
            <div className="home">
                <div className="home-box">
                    <h1 className="home-title">ME chess cup</h1>
                    <div className="home-btn-box">
                        <button className="home-btn">View</button>
                        <button className="home-btn">Join</button>
                    </div>
                </div>
                <div className="home-box">
                    <h1 className="home-title">ME chess cup</h1>
                    <div className="home-btn-box">
                        <button className="home-btn">View</button>
                        <button className="home-btn">Join</button>
                    </div>
                </div>
                <div className="home-box">
                    <h1 className="home-title">ME chess cup</h1>
                    <div className="home-btn-box">
                        <button className="home-btn">View</button>
                        <button className="home-btn">Join</button>
                    </div>
                </div>
            </div>
            <Login />
        </div>
    );
}

export default Home;

