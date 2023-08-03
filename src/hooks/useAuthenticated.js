import { useEffect } from "react";
import axios, {endpoints} from '../api/axios';

export default function useAuthenticated(onSuccess, onError){
    useEffect(() => {
        axios.get(`${endpoints.auth}`)
        .then(res => {
            onSuccess && onSuccess(res);
        })
        .catch((e) => onError && onError(e))
    }, []);
}