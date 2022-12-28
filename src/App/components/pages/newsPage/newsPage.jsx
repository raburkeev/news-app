import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import style from './newsPage.module.scss'
import {getNewsById, getNewsLoadingStatus} from '../../../store/news'
import {getAuthorById, getAuthorsLoadingStatus} from '../../../store/authors'
import Loader from '../../common/loader/loader'
import AuthorCard from './authorCard/authorCard'
import NewsContentCard from './newsContentCard/newsContentCard'
import CommentsCard from './commentsCard/commentsCard'
import BackHistoryButton from '../../common/backHistoryButton/backHistoryButton'

const NewsPage = () => {
    const {newsId} = useParams()
    const news = useSelector(getNewsById(+newsId))
    const isNewsLoading = useSelector(getNewsLoadingStatus())
    const author = useSelector(getAuthorById(news.userId))
    const isAuthorLoading = useSelector(getAuthorsLoadingStatus())

    return !isNewsLoading && !isAuthorLoading
        ? (
            <div className={style.news_container}>
                <div className={style.news_info}>
                    <AuthorCard website={author.website} email={author.email} name={author.name}/>
                    <BackHistoryButton />
                </div>
                <div className={style.news_content}>
                    <NewsContentCard body={news.body} title={news.title}/>
                    <CommentsCard newsId={newsId}/>
                </div>
            </div>
        )
        : <Loader />
}

export default NewsPage
