import React from 'react'
import {useHistory} from 'react-router-dom'
import style from './newsListPage.module.scss'
import NewsCard from './newsCard/newsCard'
import {useDispatch, useSelector} from 'react-redux'
import {getNewsError, getNewsList, getNewsLoadingStatus, getTotalNewsCount} from '../../../store/news'
import {getAuthorsError, getAuthorsList, getAuthorsLoadingStatus} from '../../../store/authors'
import {getAuthorName} from '../../../utils/getAuthorName'
import RefreshButton from '../../refreshButton/refreshButton'
import Pagination from '../../common/pagination/pagination'
import Loader from '../../common/loader/loader'
import {currentPageChanged, getCurrentPage} from '../../../store/pages'

const NewsListPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const newsList = useSelector(getNewsList())
    const isNewsLoading = useSelector(getNewsLoadingStatus())
    const authorsList = useSelector(getAuthorsList())
    const isAuthorsLoading = useSelector(getAuthorsLoadingStatus())
    const errors = {
        news: useSelector(getNewsError()),
        authors: useSelector(getAuthorsError())
    }
    const currentPage = useSelector(getCurrentPage())
    const totalNewsCount = useSelector(getTotalNewsCount())
    const pageSize = 10

    const handlePageChange = (pageIndex) => {
        dispatch(currentPageChanged(pageIndex))
        window.scrollTo(0, 0)
    }

    const handleCardClick = (id) => {
        history.push(`/news/${id}`)
    }

    if (errors.news || errors.authors) {
        return (
            <div className={style.container}>
                <RefreshButton target="news"/>
                {Object.keys(errors).map((item) => (
                    <p className={style.error} key={errors[item]}>{errors[item]}</p>
                ))}
            </div>
        )
    }

    return (
        <div className={style.container}>
            <RefreshButton target="news"/>
            {!isNewsLoading && !isAuthorsLoading
                ? (
                    <>
                        <div className={style.news_container}>
                            {newsList.map((item) => (
                                <div key={item.id} onClick={() => handleCardClick(item.id)}>
                                    <NewsCard
                                        title={item.title}
                                        name={getAuthorName(item.userId, authorsList)}
                                        onClick={handleCardClick}
                                    />
                                </div>
                            ))}
                        </div>
                        <Pagination
                            itemsCount={totalNewsCount}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                        />
                    </>
                )
                : <Loader /> }
        </div>
    )
}

export default NewsListPage
