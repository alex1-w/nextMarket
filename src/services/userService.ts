import { api } from "@/http/api"


export const userService = {
    async registration(body: any) {
        return await api.post('/user/registration', body)
    }
}