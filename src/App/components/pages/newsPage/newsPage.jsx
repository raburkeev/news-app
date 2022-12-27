/*eslint-disable*/
import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import style from './newsPage.module.scss'
import {getNewsById} from '../../../store/news'
import {getAuthorById} from '../../../store/authors'
import CommentsLoader from '../../hoc/commentsLoader'
import {getCommentsList, getCommentsLoadingStatus} from '../../../store/comments'
import CommentsList from '../../ui/commentsList/commentsList'
import RefreshButton from '../../refreshButton/refreshButton'
import Loader from '../../common/loader/loader'

const NewsPage = () => {
    const {newsId} = useParams()
    const news = useSelector(getNewsById(+newsId))
    const author = useSelector(getAuthorById(news.userId))
    const comments = useSelector(getCommentsList())
    const isCommentsLoading = useSelector(getCommentsLoadingStatus())

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
                    <h2 className={style.news_content_body_title}>{news.title}</h2>
                    <p className={style.news_content_body_entry}>{news.body}</p>

                </div>
                <CommentsLoader pageId={newsId}>
                    <div className={style.news_content_comments}>
                        <h4 className={style.news_content_comments_title}>Comments </h4>
                        <RefreshButton target="comments"/>
                        {isCommentsLoading
                            ? <Loader/>
                            : <CommentsList items={comments}/>}
                    </div>
                </CommentsLoader>
            </div>
        </div>
    )
}

export default NewsPage
