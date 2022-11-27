import axios from 'axios'

export default axios.create({
    baseURL: 'http://weather.saddlercoms.net:8080/'
    // ,
    // params: {
    //     part: 'snippet',
    //     type: 'video',
    //     maxResults: 5,
    //     key: KEY
    // }
});