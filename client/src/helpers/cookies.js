import Cookies from 'js-cookie';


export const setCookie = (name, value, options = {}) => {
    Cookies.set(name, value, options, {
        expire : 1
    });
};

export const getCookie = (name) => {
    return Cookies.get(name);
}

export const removeCookie = (key) => {
    Cookies.remove(key);
}