import React from 'react'
import './App.scss'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import NewsPage from './components/pages/newsPage'
import AppLoader from './components/hoc/appLoader'

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Switch>
                    <Route path="/news" component={NewsPage}/>
                </Switch>
            </AppLoader>
        </div>
    )
}

export default App
