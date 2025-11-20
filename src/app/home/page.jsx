'use client'
import Header from "@/components/header/page";

function Home() {
    return (
        <div className="container">
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
        </div>
    );
}

export default Home;

