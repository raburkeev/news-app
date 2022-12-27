import React from 'react'
import PropTypes from 'prop-types'
import style from './comment.module.scss'

const Comment = ({email, content}) => {
    return (
        <div className={style.comment}>
            <p className={style.comment_author}>
                {`От: ${email}`}
            </p>
            <p className={style.comment_content}>
                {content}
            </p>
        </div>
    )
}

Comment.propTypes = {
    email: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Comment
