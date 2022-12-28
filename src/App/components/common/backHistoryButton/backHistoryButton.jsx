import React from 'react'
import {useHistory} from 'react-router-dom'
import style from './backHistoryButton.module.scss'

const BackHistoryButton = () => {
    const history = useHistory()

    const handleClick = () => {
        history.goBack()
    }

    return (
        <button className={style.back_button} onClick={handleClick}>
            Назад
        </button>
    )
}

export default BackHistoryButton
