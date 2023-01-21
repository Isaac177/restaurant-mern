import Cookies from 'js-cookie';

export const setAuthentication = (token, user) => {
    Cookies.set('token', token);
    Cookies.set('isAuthenticated', true);
    Cookies.set('user', JSON.stringify(user));
}

export const isAuthenticated = () => {
    const token = Cookies.get('token');
    const authenticated = Cookies.get('isAuthenticated');
    const user = Cookies.get('user');
    if (token && authenticated && user) {
        return user.role === 1;
    }
    return false;
}

