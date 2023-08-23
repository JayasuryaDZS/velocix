import axios from "axios";
const BASE_URL = "http://localhost:1337/";


export const productAndRelease = async () => {
   return await axios.get(BASE_URL+"api/products?populate=*").then(resp => {
        let { data: {data : fullData }} = resp;
        return fullData;
    });
}

export const getAllRelease = async () => {
    return await axios.get(BASE_URL+"api/releases?populate=*").then(resp => {
        let { data: { data: releaseData } } = resp;
        return releaseData;
    });
}