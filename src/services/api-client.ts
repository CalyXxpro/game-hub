import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '52f9e641d53e4edbaafee8042313e20f'
        
    }
})