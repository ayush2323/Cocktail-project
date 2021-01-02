import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SingleCocktail from './Pages/SingleCocktail'
import Error from './Pages/Error'

import Navbar from './Components/Navbar'

export default function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/about'><About /></Route>
                <Route exact path='/cocktail/:id'><SingleCocktail /></Route>
                <Route exact path='*'><Error /></Route>
            </Switch>
        </Router>
    )
}
