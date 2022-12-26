import httpService from './http.service'

const newsEndpoint = 'posts/'

const newsService = {
    fetchAll: async () => {
        const data = await httpService.get(newsEndpoint)
        return data
    }
}

export default newsService
