/*eslint-disable*/
import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import style from './newsPage.module.scss'
import {getNewsById} from '../../../store/news'
import {getAuthorById} from '../../../store/authors'

const NewsPage = () => {
    const {newsId} = useParams()
    const news = useSelector(getNewsById(+newsId))
    const author = useSelector(getAuthorById(news.userId))

    return (
        <div className={style.news_container}>
            <div className={style.author}>
                <h4 className={style.author_title}>Автор</h4>
                <p className={style.author_name}>
                    {author.name}
                </p>
                <p className={style.author_email}>
                    email: {author.email}
                </p>
                <p className={style.author_website}>
                    site: {author.website}
                </p>
            </div>
            <div className={style.news_content}>
                <div className={style.news_content_body}>

                </div>
                <div className={style.news_content_comments}>

                </div>
            </div>
        </div>
    )
}

export default NewsPage
