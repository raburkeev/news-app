import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import style from './newsListPage.module.scss'
import NewsCard from './newsCard/newsCard'
import {useSelector} from 'react-redux'
import {getNewsError, getNewsList, getNewsLoadingStatus} from '../../../store/news'
import {getAuthorsError, getAuthorsList, getAuthorsLoadingStatus} from '../../../store/authors'
import {getAuthorName} from '../../../utils/getAuthorName'
import RefreshButton from '../../refreshButton/refreshButton'
import Pagination from '../../common/pagination/pagination'
import {paginate} from '../../../utils/paginate'
import Loader from '../../common/loader/loader'

const NewsListPage = () => {
    const history = useHistory()
    const newsList = useSelector(getNewsList())
    const isNewsLoading = useSelector(getNewsLoadingStatus())
    const authorsList = useSelector(getAuthorsList())
    const isAuthorsLoading = useSelector(getAuthorsLoadingStatus())
    const errors = {
        news: useSelector(getNewsError()),
        authors: useSelector(getAuthorsError())
    }
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10

    const newsCrop = newsList ? paginate(newsList, currentPage, pageSize) : []

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
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
                            {newsCrop.map((item) => (
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
                            itemsCount={newsList.length}
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
