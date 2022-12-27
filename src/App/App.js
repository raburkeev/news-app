/*eslint-disable*/
import React from 'react'
import './App.scss'
import {Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import NewsListPage from './components/pages/newsListPage/newsListPage'
import AppLoader from './components/hoc/appLoader'
import NewsPage from './components/pages/newsPage/newsPage'

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Switch>
                    <Route path="/news" exact component={NewsListPage}/>
                    <Route path="/news/:newsId" component={NewsPage}/>
                    <Redirect to="/news"/>
                </Switch>
            </AppLoader>
        </div>
    )
}

export default App
