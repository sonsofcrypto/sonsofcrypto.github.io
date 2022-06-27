import React, {useState, useEffect} from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import Header from "../components/Header";
import Wallet from "../components/Wallet";
import Roadmap from "../components/Roadmap";
import Video from "../components/Video";
import Mission from "../components/Mission";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Team from "../components/Team";

function App() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="tc">
            <ErrorBoundary>
                <div className='main-content-wrapper'>
                    <Header/>
                    <Wallet/>
                    <Video/>
                    <Roadmap/>
                    <Mission/>
                    <Products/>
                </div>
                <Team/>
                <Footer/>
            </ErrorBoundary>
        </div>
    )
}

export default App
