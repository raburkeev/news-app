import React from 'react'
import PropTypes from 'prop-types'
import style from './commentsList.module.scss'
import Comment from '../comment/comment'

const CommentsList = ({items}) => {
    return (
        <ul>
            {items.map((item) => (
                <li className={style.comments_list} key={item.id}>
                    <Comment email={item.email} content={item.body}/>
                </li>
            ))}
        </ul>

    )
}

CommentsList.propTypes = {
    items: PropTypes.array.isRequired
}

export default CommentsList
