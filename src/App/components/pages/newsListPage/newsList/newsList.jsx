import React from 'react'
import PropTypes from 'prop-types'
import style from './newsList.module.scss'
import NewsCard from './newsCard/newsCard'
import {useSelector} from 'react-redux'
import {getAuthorById} from '../../../../store/authors'

const NewsList = ({items, onClick}) => {
    const handleCardClick = (id) => {
        onClick(id)
    }

    return (
        <div className={style.container}>
            {items.map((item) => (
                <div key={item.id} onClick={() => handleCardClick(item.id)}>
                    <NewsCard
                        title={item.title}
                        name={useSelector(getAuthorById(item.userId)).name}
                    />
                </div>
            ))}
        </div>
    )
}

NewsList.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NewsList
