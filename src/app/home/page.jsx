'use client'


import Header from "@/components/header/page";
import Login from "../../components/login/page";


function Home(){



    return(
        <div className="conteiner">
            <Header/>
            <Login/>
        </div>
    );
}

export default Home;