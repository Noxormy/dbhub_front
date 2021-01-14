import './index.sass'

import React, {useState} from 'react'
import {useHistory} from "react-router-dom"
import {useTranslation} from 'react-i18next'

import {useAuth} from "../../network/auth"
import {PREFIX} from "../../network/env"

import {Button} from '../../components/Button'
import {LoadingBar} from "../../components/LoadingBar"


function CreateDB() {
    const { t } = useTranslation()
    const history = useHistory()
    const auth = useAuth()

    let [isLoading, setLoading] = useState(false)
    const login = () => auth.signIn(() => history.push(`${PREFIX}credentials`), setLoading)
    
    return(
        <div className='createElement'>
            <LoadingBar isLoading={isLoading}/>
            <h2>{t('create_in_one_click')}</h2>
            <h3>{t('make_it_easy')}</h3>
            <Button name={t('create_database')} callback={login}/>
        </div>
    )
}


export {CreateDB}
