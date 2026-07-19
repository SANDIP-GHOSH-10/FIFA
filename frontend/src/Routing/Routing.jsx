
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from '../components/Home';
import Team from '../pages/Team';
import Match from '../pages/Match';
import Score from '../pages/Score';
import Header from '../components/Header';


const Routing = () => {
    return (
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/team' element={<Team/>}></Route>
                    <Route path='/match' element={<Match/>}></Route>
                    <Route path='/score/:id' element={<Score/>}></Route>
                </Routes>
            </Router>
    )
}

export default Routing