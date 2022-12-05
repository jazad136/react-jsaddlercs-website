import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:8080/weather/api/city'
    // ,
    // params: {
    //     part: 'snippet',
    //     type: 'video',
    //     maxResults: 5,
    //     key: KEY
    // }
});