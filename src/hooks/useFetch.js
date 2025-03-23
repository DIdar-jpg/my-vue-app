import axios from "axios";
import { useState, useEffect } from 'react'
const useFetch = () => {

    const [ data, setData ] = useState(null)

    const url = "https://67891f1e2c874e66b7d7ac43.mockapi.io/products/clients";

    const getData = () => { axios.get(url).then(res => setData(res.data)) };

    useEffect( () => { 
        getData()
    }, [])
    return { data };
};

export default useFetch