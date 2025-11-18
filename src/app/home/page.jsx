'use client'
import Header from "@/components/header/page";
import Login from "@/components/login/page";

function Home() {
    return (
        <div className="container-fluid p-0">
            <Header />
            <Login />
        </div>
    );
}

export default Home;
