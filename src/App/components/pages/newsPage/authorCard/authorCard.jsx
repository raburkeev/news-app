import React from 'react'
import PropTypes from 'prop-types'
import style from './authorCard.module.scss'

const AuthorCard = ({name, email, website}) => {
    return (
        <div className={style.container}>
            <h4 className={style.title}>Автор</h4>
            <p className={style.name}>
                {name}
            </p>
            <p className={style.email}>
                email: {email}
            </p>
            <p className={style.website}>
                site: {website}
            </p>
        </div>
    )
}

AuthorCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
}

export default AuthorCard
