import axios from 'axios';


export const signup = async (data) => {
    return await axios.post('/api/auth/signup', data, {
        headers: { 'Content-Type': 'application/json' }
    });
};


export const signin = async (data) => {
    return await axios.post('/api/auth/signin', data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}
