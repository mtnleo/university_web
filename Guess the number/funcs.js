var global_score = 0 // it changes if the player logs in
var users = new Array()
var current_user = null

class User {
    constructor(username, pass, email) {
        this.username = username;
        this.pass = pass;
        this.email = email;
        this.score = 0;
    }

    getUsername() {
        return this.username;
    }

    getMail() {
        return this.email;
    }

    getScore() {
        return this.score;
    }

    setScore(newScore) {
        this.score = newScore;
    }

    // --------------------- Other methods

    increaseScore() {
        this.setScore(this.getScore() + 1);
    }
}

function set_local_user(logged_user) {
    localStorage.setItem("logged_user", JSON.stringify(logged_user))

}

function set_user_array(users_save) {
    localStorage.setItem("user_array", JSON.stringify(users_save))
}

function get_user_array() {
    return JSON.parse(localStorage.getItem("user_array"))
}

function get_local_user() {
    return JSON.parse(localStorage.getItem("logged_user"))
}

///###############################################
/// IF FOR THE SIGNUP --------------------------
///###############################################

if (window.location.pathname.includes("signup.html")) {
    ////////////////////////////////////////////////
    // SIGN UP -------------------------------------
    ////////////////////////////////////////////////
    users = get_user_array()
    console.log(users.length)
    const signup = document.getElementById("form_signup")

    signup.addEventListener("submit", (event) => {
        event.preventDefault()

        const username = document.getElementById("username_signup").value
        const email = document.getElementById("email_signup").value
        const pass = document.getElementById("pass_signup").value

        current_user = new User(username, pass, email)
        
        users.push(current_user)
        set_user_array(users)

        set_local_user(current_user)

        window.location.href = "index.html";
    })

    ////////////////////////////////////////////////
    // LOG IN --------------------------------------
    ////////////////////////////////////////////////

    const login = document.getElementById("form_login")

    function searchLogin(username_check, pass_check) {
        if (users != null) {
            for (let i = 0; i < users.length; i++) {
                let user_for = users[i];

                if (user_for.username === username_check && user_for.pass === pass_check) {
                    return user_for;
                }
            }
        }
        return null;
    }

    login.addEventListener("submit", (event) => {
        event.preventDefault()

        const login_username = document.getElementById("username_login").value
        const login_pass = document.getElementById("pass_login").value

        current_user = searchLogin(login_username, login_pass)
        


        if (current_user === null) {
            alert("Couldn't log in. Try again.")
            console.log("Couldn't log in")
        }
        else {
            set_local_user(current_user)
            alert("Welcome! " + current_user.username)
            global_score = current_user.score
            window.location.href = "index.html";
        }

    })

    
    
}

function Overwrite_score() {
    document.getElementById("score").innerText = "Score: " + global_score
}

if (window.location.pathname.includes("index.html")) {
    const formul = document.getElementById("form")
    let users_logged = get_user_array()
    console.log("Usuarios en el array: " + users_logged.length)
    var secret_number = Math.floor(Math.random() * 200)

    try {
        current_user = get_local_user()
    } catch(error) {
        console.log(error)
        current_user = null
    }

    //check if user is logged
    if (current_user != null) {
        console.log("User score -> ", current_user.score)
        global_score = current_user.score
        Overwrite_score()
    }
    else {
        console.log("No user here ")
    }


    formul.addEventListener("submit", (event) => {
        event.preventDefault()

        let num_guess = document.getElementById("guess").value ?? -1
        document.getElementById("guess").value = "";

        document.getElementById("number").innerText = num_guess
        //provisional --------------------------------------
        if (num_guess < secret_number) {
            document.getElementById("info").innerText = "The number is bigger"
        }
        else if (num_guess > secret_number) {
            document.getElementById("info").innerText = "The number is smaller"
        }
        // provisional --------------------------------------
        

        if (num_guess < 0 || num_guess > 200) {
            document.getElementById("info").innerText = "Guess a number between 0 and 200"
        }
        else if (num_guess == secret_number) {
            document.getElementById("info").innerText = "You won! Guess again to start a new game"

            // score handling
            global_score++
            Overwrite_score()
            current_user.score = global_score
            set_local_user(current_user)
            
            set_user_array(users_logged)

            // getting a new number
            secret_number = Math.floor(Math.random() * 200)
        }

    
        
    })
}
////////////////////////////////


