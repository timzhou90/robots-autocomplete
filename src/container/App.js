import React, {useEffect, useState, lazy, Suspense} from 'react';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
const CardList = lazy(() => import('../components/CardList'));

const App =() =>{
    const [robotsArr, setRobotsArr] = useState([]);
    const [searchfield, setSearchField] = useState("");
    
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {
            return setRobotsArr([...users])
        }
    )},[])


    const onSearchChange = (event) => {
        event.preventDefault();
        setSearchField(event.target.value)
      }

    const filteredRobots =robotsArr.filter(robotsArr =>{
        return robotsArr.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    const renderLoader = () => <p>Loading...</p>

    return (
        <div className = "tc">
            <h1>Robots</h1>
            <SearchBox searchChange={(e)=>onSearchChange(e)}/>
            <Suspense fallback={renderLoader()}>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </Suspense>
        </div>
    )
}

export default App