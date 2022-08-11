export const signUp = async (username, firstname, lastname, email, password, setUser, setLoggedIn) => {
    try {
        const response = await fetch("http://localhost:5000/users", 
           { method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify
                ({"userName": username,
                "firstName": firstname,
                "lastName": lastname,
                "email": email,
                "password": password
            })
            } 
        )
        const data = await response.json()
        console.log(data.savedUser.userName)
        setUser(data.savedUser.userName)
        setLoggedIn(true)
    } catch(error) {
        console.log(error)
    }
}

export const login = async (username, password, setUser, setLoggedIn) => {
    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "userName": username,
                "password": password
            })
        })
        const data = await response.json()
        setUser({username: data.user.username, password:data.user.password})
        setLoggedIn(true)
    } catch (error) {
        console.log(error)
    }
}