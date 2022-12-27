import React from 'react'
import PropTypes from 'prop-types'
import style from './pagination.module.scss'
import _ from 'lodash'

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {
    const pageCount = Math.ceil(itemsCount / pageSize)

    if (pageCount === 1) return null

    const pages = _.range(1, pageCount + 1)

    return (
        <nav className={style.pagination_container}>
            <ul className={style.pagination_list}>
                {pages.map((page) => (
                    <li
                        className={currentPage !== page ? style.pagination_list_item : style.pagination_list_item_active}
                        key={page}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination
