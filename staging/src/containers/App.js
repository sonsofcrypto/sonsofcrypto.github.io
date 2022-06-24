import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from "./Scroll.js"
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';
import Header from "../components/Header";
import Wallet from "../components/Wallet";
import Roadmap from "../components/Roadmap";

function App() {

    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.includes(searchField)
    })

    // if (robots.length === 0) {
    //     return <div className="tc">
    //         <h1 className="tc">Loading</h1>
    //     </div>
    // }

    return (
        <div className="tc">
            <ErrorBoundary>
                <Header/>
                <Wallet/>
                <Roadmap/>
                <h1 className="f1">Robot friends</h1>
                <SearchBox searchChange={onSearchChange} />
                <CardList robots={filteredRobots} />
                {/*<Scroll>*/}
                    <CardList robots={filteredRobots} />
                {/*</Scroll>*/}
            </ErrorBoundary>
        </div>
    )
}

export default App
