import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {loadNews} from '../../store/news'

const AppLoader = ({children}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadNews())
    }, [])

    return children
}

export default AppLoader
