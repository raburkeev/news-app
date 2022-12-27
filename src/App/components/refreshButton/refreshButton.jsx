import React from 'react'
import style from './refreshButton.module.scss'
import {useDispatch} from 'react-redux'
import {loadNews} from '../../store/news'
import {loadAuthors} from '../../store/authors'

const RefreshButton = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(loadNews())
        dispatch(loadAuthors())
    }

    return (
        <button className={style.refresh_button} onClick={handleClick}>
            <i className="bi bi-arrow-repeat"/>
        </button>
    )
}

export default RefreshButton
