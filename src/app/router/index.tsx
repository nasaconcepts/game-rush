import React from 'react'
import {BrowserRouter  as Router, Routes,Route} from 'react-router-dom'
import Login from '../components/loginandplay/checkin'
import PlayGround from '../components/loginandplay/playground'

const RouteNavigation: React.FC = ()=>{
    return(
        <Router>
            <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/playground' element={<PlayGround/>}/>
            </Routes>
        </Router>
    )
}

export default RouteNavigation;