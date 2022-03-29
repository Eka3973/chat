import $api from "../http"

export default class AuthService {
    static async login({email, password}){
        return $api.post('auth/login', {email, password})
    }

    static async registration({userName, email, password}){
        return await $api.post('auth/registration', {userName, email, password})
    }

    static async logout(){
        return $api.post('auth/logout')
    }
}

