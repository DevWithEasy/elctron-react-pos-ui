import axios from 'axios';
import api_url from './api_url';

export const createData= async(path,data) => {
    try {
        const res = await axios.post(`${api_url}/${path}/create`,data,{
            headers: {
                authorization : localStorage.getItem('token')
            }
        })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const updateData= async(path,data) => {
    try {
        const res = await axios.put(`${api_url}/${path}/update/${data._id}`,data,{
            headers: {
                authorization : localStorage.getItem('token')
            }
        })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteData= async(path,data) => {
    try {
        const res = await axios.delete(`${api_url}/${path}/delete/${data._id}`,{
            headers: {
                authorization : localStorage.getItem('token')
            }
        })
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}