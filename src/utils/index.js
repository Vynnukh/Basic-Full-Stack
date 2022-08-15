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
                "email":email,
               "password":password
            })
        })
        const data = await response.json()
        setUser( data.user.email, data.user.password)
        setLoggedIn(true)
    } catch (error) {
        console.log(error)
    }
}

export const logout = async (token, setLoggedIn) => {
    try {
        const response = await fetch("http://localhost:5000/users/logout", {
            method: "GET",
            headers: {Authorization: token}
        })
        const data = await response.json()
        setLoggedIn(false)
    } catch(error) {
        console.log(error)
    }
}

export const readUsers = async () => {
    try {
        const response = await fetch("http://localhost:5000/users/finduser", {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        })

        const data = await response.json()


    } catch(error) {
        console.log(error)
    }
}

export const update = async (username, firstname, lastname, email, password, setUser) => {
    try {
        const response = await fetch("http://localhost:5000/users/myProfile",
        { method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify
        ({"userName": username,
        "firstName": firstname,
        "lastName": lastname,
        "email": email,
        "password": password
    })
})
        const data = await response.json()
        setUser(data.updatedUser.username, data.updatedUser.firstname, data.updatedUser.lastname,  data.updatedUser.email,  data.updatedUser.password)
    } catch(error) {
        console.log(error)
    }
}

export const deleteUser = async (username, password, setLoggedIn) => {
    try {
        const response = await fetch("http://localhost:5000/users/myProfile",
        { method: "DELETE",
       headers: {"content-Type": "application/json"},
    body: JSON.stringify
({"userName": username,
    "password": password

    })
})
    const data = await response.json()
    // setLoggedIn(false)
    } catch(error) {
        console.log(error)
    }
}