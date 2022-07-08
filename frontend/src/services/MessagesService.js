import $api from "../http"

export default class MessagesService {
    static async addMessage({from, to, message}) {
        return $api.post('messages/addmsg', {from, to, message})
    }
    static async getMessages({from, to}) {
        return $api.post('messages/getmsg', {from, to})
    }
}
