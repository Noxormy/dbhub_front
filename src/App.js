import './App.sass'

import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {CreateDB} from './pages/CreateDB'
import {useTranslation} from 'react-i18next'

import {ProvideAuth} from "./components/ProvideAuth"
import {PrivateRoute} from "./components/PrivateRoute"
import {Localization} from "./components/Localization"
import {Instructions} from "./pages/Instructions";


function App() {
    const { t } = useTranslation()

    return (
    <div className='App'>
        <Localization/>
        <header className='header'>DB<span className='header-selection'>hub</span></header>
        <ProvideAuth>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <CreateDB/>
                    </Route>
                    <PrivateRoute path="/credentials">
                        <Instructions/>
                    </PrivateRoute>
                </Switch>
            </Router>
        </ProvideAuth>
        <div className='signs'>{t('created_by')} <a href='https://twitter.com/nnoxnnox'>@noxormy</a></div>
    </div>
  )
}


export default App
