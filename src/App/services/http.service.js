import axios from 'axios'
import configFile from '../configFile.json'

const http = axios.create({
    baseURL: configFile.apiEndpoint
})

http.interceptors.response.use(
    (res) => {
        res = res.data
        if (res.name && res.username) {
            return {id: res.id, name: res.name, username: res.username}
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
