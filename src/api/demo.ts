
import axios from "axios";

export async function get(id: number): Promise<any> {
    const url = `/api/tickets/${id}`
    return axios.get(url)
}