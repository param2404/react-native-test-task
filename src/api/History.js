import axios from 'axios'
import {BASE_URL} from "./ApiConstant";

export function getData(start, end) {
    const uri = `${BASE_URL}/history?key=demo-26240835858194712a4f8cc0dc635c7a&currency=BTC&start=${start}T00:00:00.999Z&end=${end}T00:00:00.586Z`;
    return axios.get(uri)
}
