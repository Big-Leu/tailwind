const URL = 'http://localhost:8000/api/v1';

const fetchUserData = async () => {
    try {
        const response = await fetch(`${URL}/userdata`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', 
        });

        const data = await response.json();
        console.log('User data:', data);
        return response.status; 
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

export default fetchUserData;