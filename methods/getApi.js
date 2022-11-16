import axios from "axios"

const apiData = async (url)=>{
    try {
        const response = await axios.get(url)
        // console.log("response = ",response)
        return response
    } catch (error) {
        console.log(error)
    }
}
export default apiData