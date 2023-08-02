import axios, {endpoints} from "../api/axios";

export default function useProductAPI(onSuccess, onError)
{
    const checker = (actionName, request) => {
        request.then((res) => {
            if(res.statusText === 'OK') onSuccess && onSuccess(actionName, res);
            else onError && onError(actionName, res);
        })
        .catch(e => onError && onError(actionName, res));
    }

    const getProducts = () => {
        checker('getMany', axios.get(endpoints.products));
    }

    const addProduct = (name, price) => {
        checker('add', axios.post(endpoints.products, {name, price}));
    }

    return {getProducts, addProduct};
}