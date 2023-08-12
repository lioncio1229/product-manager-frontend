import { useEffect } from "react";
import axios, {endpoints} from '../api/axios';
import newAbortSignal from "../api/newAbortSignal";

export default function useAuthenticated(onSuccess, onError, onStart=()=>{}, def=[]){

    useEffect(() => {
        onStart();
        const {signal, abort} = newAbortSignal(12000);

        axios.get(`${endpoints.auth}`, {signal})
        .then(res => {
            onSuccess && onSuccess(res);
        })
        .catch((e) => onError && onError(e))

    }, def);
}