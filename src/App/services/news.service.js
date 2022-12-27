import httpService from './http.service'

const newsEndpoint = 'posts/'

const newsService = {
    fetchAll: async () => {
        return await httpService.get(newsEndpoint)
    }
}

export default newsService
