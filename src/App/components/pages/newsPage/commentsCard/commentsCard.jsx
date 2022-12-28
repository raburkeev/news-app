import React from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'
import style from './commentsCard.module.scss'
import RefreshButton from '../../../ui/refreshButton/refreshButton'
import Loader from '../../../common/loader/loader'
import CommentsList from '../../../ui/commentsList/commentsList'
import CommentsLoader from '../../../hoc/commentsLoader'
import {getCommentsError, getCommentsList, getCommentsLoadingStatus} from '../../../../store/comments'

const CommentsCard = ({newsId}) => {
    const comments = useSelector(getCommentsList())
    const isCommentsLoading = useSelector(getCommentsLoadingStatus())
    const error = useSelector(getCommentsError())

    return (
        <CommentsLoader pageId={newsId}>
            <div className={style.container}>
                <h4 className={style.title}>Comments</h4>
                <RefreshButton target="comments"/>
                {isCommentsLoading
                    ? <Loader/>
                    : (
                        !error
                            ? <CommentsList items={comments}/>
                            : <p className={style.error}>{error}</p>
                    ) }
            </div>
        </CommentsLoader>
    )
}

CommentsCard.propTypes = {
    newsId: PropTypes.string.isRequired
}

export default CommentsCard
