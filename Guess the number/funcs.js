var global_score = 0 // it changes if the player logs in
var users = new Array()
var current_user = null

function Overwrite_score() {
    document.getElementById("score").innerText = "Score: " + global_score
}

if (window.location.pathname.includes("index.html")) {
    const formul = document.getElementById("form")
    var secret_number = Math.floor(Math.random() * 200)

    //check if user is logged
    if (current_user != null) {
        global_score = current_user.score
        Overwrite_score()
    }


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
        this.score = 10;
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

        current_user = searchLogin(login_username, login_pass)

        if (current_user === null) {
            alert("Couldn't log in. Try again.")
            console.log("No se pudo loguear")
        }
        else {
            alert("Welcome! " + current_user.username)
            console.log("Logueado")
            global_score = current_user.score
            window.location.href = "index.html";
        }

    })
}