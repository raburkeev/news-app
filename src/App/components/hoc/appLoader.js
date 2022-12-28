import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadNews} from '../../store/news'
import {loadAuthors} from '../../store/authors'

const AppLoader = ({children}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadNews())
        dispatch(loadAuthors())

        const refreshInterval = setInterval(() => {
            dispatch(loadNews())
            dispatch(loadAuthors())
        }, 60000)

        return () => {
            clearInterval(refreshInterval)
        }

    }, [])

    return children
}

export default AppLoader
