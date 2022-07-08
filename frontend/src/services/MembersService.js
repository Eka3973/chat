import $api from "../http"

export default class MembersService {
    static async getMembers({id}){
        return $api.post('members', {id})
    }
}
