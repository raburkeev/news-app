import httpService from './http.service'

const authorsEndpoint = 'users/'

const authorsService = {
    fetchAll: () => {
        const data = httpService.get(authorsEndpoint)
        return data
    }
}

export default authorsService
