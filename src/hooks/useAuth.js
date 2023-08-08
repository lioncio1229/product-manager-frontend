import axios, {endpoints} from '../api/axios';

export default function useAuth(onSuccess, onError){

    const request = (type, form) => {
        const endpoint = `${endpoints.auth}/?type=${type}`;
        (form ? axios.post(endpoint, form) : axios.post(endpoint))
        .then(res => {
            onSuccess && onSuccess(res);
        })
        .catch((e) => onError && onError(e));
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const username = form.get('username');
        const password = form.get('password');
        const confirmedPassword = form.get('confirmPassword');

        if(username && password && confirmedPassword && (password === confirmedPassword))
        {
            setTimeout(() => {
                request('signup', form);
            }, 8000)
        }
        else{
            onError({passwordNotMatch: true});
        }
    }

    const handleSignout = (e) => {
        request('signout');
    }

    const handleSignin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        request('signin', form);
    }

    return {handleSignin, handleSignup, handleSignout};
}