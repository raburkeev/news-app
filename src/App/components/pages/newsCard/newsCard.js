import React from 'react'
import PropTypes from 'prop-types'
import style from './newsCard.module.scss'

const NewsCard = ({title}) => {
    return (
        <div className={style.card_container}>
            <div className={style.card}>
                <h3 className={style.card_title}>{title}</h3>
                <p className={style.card_author}>
                    user long long name
                </p>
            </div>
        </div>
    )
}

NewsCard.propTypes = {
    title: PropTypes.string.isRequired
}

export default NewsCard
