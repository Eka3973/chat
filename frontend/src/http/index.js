import axios from 'axios'
import Keychain from "react-native-keychain"

export const API_URL = `http://localhost:5000/`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use(
    async (config) => {
        const {password: token} = await Keychain.getGenericPassword()
        console.log('token', token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    })

$api.interceptors.response.use((config)=>{
    return config
}, async error => {
    const originalRequest = error.config

    if (error.response?.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            await Keychain.setGenericPassword(response.data.user.id, response.data.accessToken)
            return $api.request(originalRequest)
        }catch (e){
            console.log('НЕ АВТОРИЗОВАН')
        }

    }
    console.log('errorInt', error);
    throw error.response?.data
})
export default $api
