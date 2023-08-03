import axios, {endpoints} from "../api/axios";

export default function useProductAPI(onSuccess, onError)
{
    const fetchCall = (actionName, request) => {
        request.then((res) => {
            onSuccess && onSuccess(actionName, res);
        })
        .catch(e => onError && onError(actionName, res));
    }

    const getProducts = () => {
        fetchCall('getMany', axios.get(endpoints.products));
    }

    const addProduct = (name, price) => {
        fetchCall('add', axios.post(endpoints.products, {name, price}));
    }

    const updateProduct = (id, name, price) => {
        fetchCall('update', axios.put(`${endpoints.products}/${id}`, {name, price}));
    }

    const deleteProduct = id => {
        fetchCall('delete', axios.delete(`${endpoints.products}/${id}`));
    }

    return {getProducts, addProduct, updateProduct, deleteProduct};
}