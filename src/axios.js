import axios from "axios";
import {baseUrl} from './Constants/Constants'

const Instance = axios.create ({
    baseURL: baseUrl,
})

export default Instance