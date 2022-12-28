import React from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import style from './refreshButton.module.scss'
import {useDispatch} from 'react-redux'
import {loadNews} from '../../../store/news'
import {loadAuthors} from '../../../store/authors'
import {loadCommentsByNewsId} from '../../../store/comments'

const RefreshButton = ({target}) => {
    const dispatch = useDispatch()
    const {newsId} = useParams()

    const handleRefreshNews = () => {
        dispatch(loadNews())
        dispatch(loadAuthors())
    }

    const handleRefreshComments = () => {
        dispatch(loadCommentsByNewsId(newsId))
    }

    const handleClick = () => {
        switch (target) {
            case 'news':
                return handleRefreshNews()
            case 'comments':
                return handleRefreshComments()
            default:
                break
        }
    }

    return (
        <button className={style.refresh_button} onClick={handleClick}>
            <i className="bi bi-arrow-repeat"/>
        </button>
    )
}

RefreshButton.propTypes = {
    target: PropTypes.string.isRequired
}

export default RefreshButton
