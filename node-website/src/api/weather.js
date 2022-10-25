import axios from 'axios'
//const KEY = 'AIzaSyC6_nGICnzcaiUfNkWUAEc3TVQz2ILDBmY'

export default axios.create({
    baseURL: 'https://localhost:8080/weathercalls'
    // ,
    // params: {
    //     part: 'snippet',
    //     type: 'video',
    //     maxResults: 5,
    //     key: KEY
    // }
});