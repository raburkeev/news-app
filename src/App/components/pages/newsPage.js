import React from 'react'
import style from './newsPage.module.scss'
import NewsCard from './newsCard/newsCard'
import {useSelector} from 'react-redux'
import {getNewsList, getNewsLoadingStatus} from '../../store/news'
import {getAuthorsList, getAuthorsLoadingStatus} from '../../store/authors'
import {getAuthorName} from '../../utils/getAuthorName'

const NewsPage = () => {
    const newsList = useSelector(getNewsList())
    const isNewsLoading = useSelector(getNewsLoadingStatus())
    const authorsList = useSelector(getAuthorsList())
    const isAuthorsLoading = useSelector(getAuthorsLoadingStatus())

    return !isNewsLoading && !isAuthorsLoading
        ? (
            <div className={style.news_container}>
                {newsList.map((item) => (
                    <NewsCard key={item.id} title={item.title} name={getAuthorName(item.userId, authorsList)} />
                ))}
            </div>
        )
        : 'Loading...'
}

export default NewsPage
