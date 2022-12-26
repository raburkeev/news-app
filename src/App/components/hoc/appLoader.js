import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadNews} from '../../store/news'
import {loadAuthors} from '../../store/authors'

const AppLoader = ({children}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadNews())
        dispatch(loadAuthors())
    }, [])

    return children
}

export default AppLoader
