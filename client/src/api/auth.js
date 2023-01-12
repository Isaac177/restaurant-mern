import axios from 'axios';


export const signup = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return await axios.post('/api/auth/signup', data, config);
}