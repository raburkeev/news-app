import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import {loadCommentsByNewsId} from '../../store/comments'

const CommentsLoader = ({children, pageId}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCommentsByNewsId(pageId))

        const refreshInterval = setInterval(() => {
            dispatch(loadCommentsByNewsId(pageId))
        }, 60000)

        return () => {
            clearInterval(refreshInterval)
        }
    }, [])

    return children
}

CommentsLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    pageId: PropTypes.string.isRequired
}

export default CommentsLoader
