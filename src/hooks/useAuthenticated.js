import { useEffect } from "react";
import axios, {endpoints} from '../api/axios';

export default function useAuthenticated(onSuccess, onError){
    useEffect(() => {
        axios.get(`${endpoints.auth}`)
        .then(res => {
            if(res.statusText === 'OK')
            {
                onSuccess && onSuccess(res)
            }
            else {
                onError && onError(res);
            }
        })
        .catch((e) => onError && onError(e))
    }, []);
}