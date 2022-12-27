import axios from 'axios'
import configFile from '../configFile.json'

const http = axios.create({
    baseURL: configFile.apiEndpoint
})

http.interceptors.response.use(
    (res) => {
        res = res.data
        if (res && res[0].name && res[0].username) {
            res = res.map(el => (
                {
                    id: el.id,
                    name: el.name,
                    username: el.username,
                    email: el.email,
                    website: el.website
                }))
            return res
        }
        return res
    }
)

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
}

export default httpService
