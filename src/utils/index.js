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

export const login = async (email, password, setUser, setLoggedIn) => {
    try {
        const response = await fetch("http://localhost:5000/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
               password
            })
        })
        const data = await response.json()
        setUser({email: data.user.email, password: data.user.password})
        setLoggedIn(true)
    } catch (error) {
        console.log(error)
    }
}

export const update = async (username, firstname, lastname, email, password, setUser) => {
    try {
        const response = await fetch("http://localhost:5000/users/myProfile",
        { method: "PATCH",
    hearders: {"Content-Type": "application/json"},
    body: JSON.stringify
        ({"userName": username,
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "password": password
    })
})
        const data = await response.json()
        setUser({username: data.user.username, firstname: data.user.firstname, lastname: data.user.lastname, email: data.user.email, password: data.user.password})
    } catch(error) {
        console.log(error)
    }
}