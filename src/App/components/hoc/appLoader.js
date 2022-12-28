import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadNews} from '../../store/news'
import {loadAuthors} from '../../store/authors'
import {getCurrentPage} from '../../store/pages'

const AppLoader = ({children}) => {
    const dispatch = useDispatch()
    const currentPage = useSelector(getCurrentPage())

    useEffect(() => {
        dispatch(loadNews())
        dispatch(loadAuthors())
    }, [currentPage])

    return children
}

export default AppLoader
