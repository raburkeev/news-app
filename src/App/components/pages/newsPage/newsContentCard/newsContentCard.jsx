import React from 'react'
import PropTypes from 'prop-types'
import style from './newsContentCard.module.scss'

const NewsContentCard = ({title, body}) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>
                {title}
            </h2>
            <p className={style.content}>
                {body}
            </p>
        </div>
    )
}

NewsContentCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NewsContentCard
