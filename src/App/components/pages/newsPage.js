import React from 'react'
import style from './newsPage.module.scss'
import NewsCard from './newsCard/newsCard'

const NewsPage = () => {
    const news = [
        {
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
            userId: 1,
            id: 2,
            title: 'qui est esse',
            body: 'est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
            userId: 1,
            id: 3,
            title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
            body: 'et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut'
        }
    ]

    return (
        <div className={style.news_container}>
            {news.map((item) => (
                <NewsCard key={item.id} title={item.title}/>
            ))}
        </div>
    )
}

export default NewsPage
