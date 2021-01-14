import './App.sass'

import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {useTranslation} from 'react-i18next'

import {PREFIX} from "./network/env"

import {CreateDB} from './pages/CreateDB'
import {Instructions} from "./pages/Instructions";

import {ProvideAuth} from "./components/ProvideAuth"
import {PrivateRoute} from "./components/PrivateRoute"
import {Localization} from "./components/Localization"


function App() {
    const { t } = useTranslation()

    return (
    <div className='App'>
        <Localization/>
        <header className='header'>DB<span className='header-selection'>hub</span></header>
        <ProvideAuth>
            <Router>
                <Switch>
                    <Route exact path={`${PREFIX}`}>
                        <CreateDB/>
                    </Route>
                    <PrivateRoute path={`${PREFIX}credentials`}>
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
