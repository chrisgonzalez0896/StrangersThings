function getToken() {
    fetch('https://strangers-things.herokuapp.com/api/2108-UIC-RM-WEB-PT/users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: 'cg96',
                password: 'password'
            }
        })
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
}

getToken();
//TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTg0NzhiMjIxMjlhZDAwMTdhOWMzZjEiLCJ1c2VybmFtZSI6ImNnOTYiLCJpYXQiOjE2MzYwNzE2MDJ9.sDm7BJBazYW6jD3LvHCxLkfw5_6T2x3uK8XcNy5biac