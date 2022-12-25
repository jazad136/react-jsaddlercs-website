import axios from 'axios'

export default axios.create({
    baseURL: 'http://jonsdevs.net/weather/api/city'
    // ,
    // params: {
    //     part: 'snippet',
    //     type: 'video',
    //     maxResults: 5,
    //     key: KEY
    // }
});