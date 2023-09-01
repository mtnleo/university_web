// pregunta a Nahuel. Para storear el usuario que ahora mismo está en la pag
// debería agarrar y crearle una cookie donde almaceno los datos del objeto
// usuario como JSON (string), para luego leerlo de la cookie y decodificar
// el JSON para poder usarlo?

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

function set_user_array() {
    //
}

function get_local_user() {
    return JSON.parse(localStorage.getItem("logged_user"))
}

if (window.location.pathname.includes("signup.html")) {
    // SIGN UP -------------------------------
    const signup = document.getElementById("form_signup")

    signup.addEventListener("submit", (event) => {
        event.preventDefault()

        const username = document.getElementById("username_signup").value
        const email = document.getElementById("email_signup").value
        const pass = document.getElementById("pass_signup").value

        const current_user = new User(username, pass, email)
        
        users.push(current_user)

        set_local_user(current_user)

        console.log("Registrado")
    })

    ///hardcode to login
    var user1 = new User("tin", "asdasd", "tin@mail.com")
    var user2 = new User("herni", "asdasd", "herni@mail.com")
    users.push(user1)
    users.push(user2)

    user1.increaseScore()
    user1.increaseScore()
    user1.increaseScore()

    ////////////////////////

    // LOG IN -------------------------------
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
        set_local_user(current_user)


        if (current_user === null) {
            alert("Couldn't log in. Try again.")
            console.log("Couldn't log in")
        }
        else {
            console.log("Logged. Score -> ", current_user.score)
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
            global_score++
            Overwrite_score()
            secret_number = Math.floor(Math.random() * 200)
            console.log(global_score)
            set_local_user(current_user)
        }

        
        //document.getElementById("info").innerText = ""
        
    })
}
////////////////////////////////


