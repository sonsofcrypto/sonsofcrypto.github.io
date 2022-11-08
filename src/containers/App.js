import React, {useState, useEffect, Fragment} from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import {useSections} from "../hoocks/useSections";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import WalletSection from "../components/WalletSection";
import VideoSection from "../components/VideoSection";
import RoadmapSection from "../components/RoadmapSection";
import Team from "../components/Team";

function App() {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        console.log("mounted");
        setSections(useSections)
        window.scrollTo(0, 0)
    }, [])

    return (
        <ErrorBoundary>
            <NavBar/>
            <Hero/>
            <Overview/>
            <WalletSection/>
            <VideoSection/>
            <RoadmapSection/>
            {sections.map((section, i) => (
                <Section
                    id={section.id}
                    title={ section.title }
                    quotes={ section.quotes }
                    imgName={ section.imgName }
                    qoutesPalleteIds={ section.qoutesPalleteIds }
                    key={ i }
                >
                    { section.body }
                </Section>
            ))}
            <Team/>
            <Footer/>
        </ErrorBoundary>
    )
}

export default App
