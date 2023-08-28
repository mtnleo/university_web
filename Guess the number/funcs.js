const formul = document.getElementById("form")
const secret_number = Math.floor(Math.random() * 200)
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
        document.getElementById("info").innerText = "You won!"
    }

    document.getElementById("number").innerText = num_guess
    //document.getElementById("info").innerText = ""
    
})

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
        this.setScore(this.getScore + 1);
    }
}

const signup = document.getElementById("signup")

signup.addEventListener("submit", (event) => {

    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value

    let alumno = new User(username, pass, email)
    

})