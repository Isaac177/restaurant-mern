import axios from 'axios';


export const signup = async (data) => {
    return await axios.post('/api/auth/signup', {
        headers: { 'Content-Type': 'application/json' },
        data: data,
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
