import httpService from './http.service'

const newsEndpoint = 'posts/'

const newsService = {
    fetchAll: async (payload) => {
        return await httpService.get(`${newsEndpoint}?_limit=10&_page=${payload}`)
    },
    getComments: async (payload) => {
        return await httpService.get(`${newsEndpoint}${payload}/comments`)
    }
}

export default newsService
