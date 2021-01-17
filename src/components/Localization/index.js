import './index.sass'
import i18n from "../../i18next"


function Localization() {
    return (
        <div className='localeSettings'>
            <select onChange={(event) => i18n.changeLanguage(event.target.value)}>
                <option>en</option>
                <option>ru</option>
            </select>
            {/*</select>*/}
            {/*<span className='language' onClick={() => i18n.changeLanguage('en')}>en</span>*/}
            {/*<span> / </span>*/}
            {/*<span className='language' onClick={() => i18n.changeLanguage('ru')}>ru</span>*/}
        </div>
    )
}

export {Localization}