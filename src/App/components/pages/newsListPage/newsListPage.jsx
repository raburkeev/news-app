import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import style from './newsListPage.module.scss'
import {useSelector} from 'react-redux'
import {getNewsError, getNewsList, getNewsLoadingStatus} from '../../../store/news'
import {getAuthorsError, getAuthorsLoadingStatus} from '../../../store/authors'
import RefreshButton from '../../ui/refreshButton/refreshButton'
import Pagination from '../../common/pagination/pagination'
import {paginate} from '../../../utils/paginate'
import Loader from '../../common/loader/loader'
import NewsList from './newsList/newsList'

const NewsListPage = () => {
    const history = useHistory()
    const newsList = useSelector(getNewsList())
    const isNewsLoading = useSelector(getNewsLoadingStatus())
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
                        <NewsList items={newsCrop} onClick={handleCardClick} />
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
