import i18n from "../../i18next"


function Localization() {
    return (
        <div className='localeSettings'>
            <span className='language' onClick={() => i18n.changeLanguage('en')}>en</span>
            <span> / </span>
            <span className='language' onClick={() => i18n.changeLanguage('ru')}>ru</span>
        </div>
    )
}

export {Localization}