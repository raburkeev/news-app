import axios from 'axios'
import configFile from '../configFile.json'

const http = axios.create({
    baseURL: configFile.apiEndpoint
})

http.interceptors.response.use(
    (res) => {
        if (res.data && res.data[0].name && res.data[0].username) {
            res = res.data.map(el => (
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
