import httpService from './http.service'

const newsEndpoint = 'posts/'

const newsService = {
    fetchAll: async () => {
        return await httpService.get(newsEndpoint)
    },
    getComments: async (payload) => {
        return await httpService.get(`${newsEndpoint}${payload}/comments`)
    }
}

export default newsService
