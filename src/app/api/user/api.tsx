

const URL = 'http://localhost:8000/api/v1';

const page = async() =>{
    try{
        const response = await fetch(`${URL}/userdata`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            });
            console.log('User data:', response);
            return response;
    }catch(error){
        console.error('Error during login:', error);
    }
}

export default page;