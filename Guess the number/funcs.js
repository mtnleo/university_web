var global_score = 0 // it changes if the player logs in

function Overwrite_score() {
    document.getElementById("score").innerText = "Score: " + global_score
}

if (window.location.pathname.includes("index.html")) {
    const formul = document.getElementById("form")
    var secret_number = Math.floor(Math.random() * 200)
    // create gradient array ----------------------------------
    //still working on it


    function calculate_separation(mystery, guess) { //this function calculates the % of separation between the guess and the mystery number
        let percentage

        if (mystery > guess ) {
            percentage = (guess * 100) / mystery
        }
        else if (mystery <= guess) {
            percentage = (mystery * 100) / guess
        }

        return percentage
    }

    formul.addEventListener("submit", (event) => {
        event.preventDefault()

        let num_guess = document.getElementById("guess").value ?? -1
        let separation = parseInt(calculate_separation(secret_number, num_guess))
        
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
        }

        
        //document.getElementById("info").innerText = ""
        
    })
}
////////////////////////////////

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

var users = new Array()

if (window.location.pathname.includes("signup.html")) {
    // SIGN UP -------------------------------
    const signup = document.getElementById("form_signup")

    signup.addEventListener("submit", (event) => {
        event.preventDefault()

        const username = document.getElementById("username_signup").value
        const email = document.getElementById("email_signup").value
        const pass = document.getElementById("pass_signup").value

        const alumno = new User(username, pass, email)
        
        users.push(alumno)

        console.log("Registrado")
    })

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

        const logged_user = searchLogin(login_username, login_pass)

        if (logged_user === null) {
            alert("Couldn't log in. Try again.")
            console.log("No se pudo loguear")
        }
        else {
            alert("Welcome! " + logged_user.username)
            console.log("Logueado")
            global_score = logged_user.score
        }

    })
}