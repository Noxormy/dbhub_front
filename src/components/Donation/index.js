import React from 'react'
import {useTranslation} from 'react-i18next'


function Donation({className}) {
    const { t } = useTranslation()

    return (
        <div className={className}>
            <a href='https://pay.cloudtips.ru/p/ace9a3eb'>{t('donation')}</a>
        </div>
    )
}


export {Donation}
